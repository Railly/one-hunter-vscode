import CLibMongoC
import Foundation

/// A protocol for `CommandEvent` handlers to implement.
public protocol CommandEventHandler: AnyObject {
  /// Handle a `CommandEvent`.
  func handleCommandEvent(_ event: CommandEvent)
}

/// A protocol for handlers of events relating to SDAM to implement.
public protocol SDAMEventHandler: AnyObject {
  /// Handle an `SDAMEvent`.
  func handleSDAMEvent(_ event: SDAMEvent)
}

/// A protocol for events that are directly consumable by users to implement.
private protocol Publishable {
  func publish(to client: MongoClient)
}

/// A protocol for monitoring events to implement, indicating that they can be initialized from a libmongoc event
/// and that they can be packaged into a type which can be published.
private protocol MongoSwiftEvent {
  associatedtype MongocEventType: MongocEvent
  associatedtype PublishableEventType: Publishable

  static var monitoringComponent: MonitoringComponent { get }

  init(mongocEvent: MongocEventType)

  func toPublishable() -> PublishableEventType
}

/// Indicates which type of monitoring an event is associated with.
private enum MonitoringComponent {
  case command, sdam
}

/// A protocol for libmongoc event wrappers to implement.
private protocol MongocEvent {
  init(_ eventPtr: OpaquePointer)

  var context: UnsafeMutableRawPointer? { get }
}

/// A command monitoring event.
public enum CommandEvent: Publishable {
  /// An event published when a command starts.
  case started(CommandStartedEvent)

  /// An event published when a command succeeds.
  case succeeded(CommandSucceededEvent)

  /// An event published when a command fails.
  case failed(CommandFailedEvent)

  private var event: CommandEventProtocol {
    switch self {
    case let .started(event):
      return event
    case let .succeeded(event):
      return event
    case let .failed(event):
      return event
    }
  }

  fileprivate func publish(to client: MongoClient) {
    client.commandEventHandlers.forEach { handler in
      handler.handleCommandEvent(self)
    }
  }

  /// The name of the command that generated this event.
  public var commandName: String {
    self.event.commandName
  }

  /// The driver generated request ID.
  public var requestID: Int64 {
    self.event.requestID
  }

  /// The driver generated operation ID. This is used to link events together such
  /// as bulk write operations.
  public var operationID: Int64 {
    self.event.operationID
  }

  /// The address of the server the command was run against.
  public var serverAddress: ServerAddress {
    self.event.serverAddress
  }

  /// The service ID for the command, if the driver is in load balancer mode.
  public var serviceID: BSONObjectID? {
    self.event.serviceID
  }
}

/// A protocol for command monitoring events to implement, specifying the command name and other shared fields.
private protocol CommandEventProtocol {
  /// The command name.
  var commandName: String { get }

  /// The driver generated request ID.
  var requestID: Int64 { get }

  /// The driver generated operation ID. This is used to link events together such
  /// as bulk write operations.
  var operationID: Int64 { get }

  /// The address of the server the command was run against.
  var serverAddress: ServerAddress { get }

  /// The service ID for the command, if the driver is in load balancer mode.
  var serviceID: BSONObjectID? { get }
}

#if compiler(>=5.5.2) && canImport(_Concurrency)
  /// An asynchronous way to monitor command events that uses `AsyncSequence`.
  /// Only available for Swift 5.5.2 and higher.
  @available(macOS 10.15, *)
  // sourcery: skipSyncExport
  public struct CommandEventStream {
    fileprivate let stream: AsyncStream<CommandEvent>
    private let cmdHandler: CommandEventHandler
    /// Initialize the stream with a `CommandEventHandler`
    internal init(cmdHandler: CommandEventHandler, stream: AsyncStream<CommandEvent>) {
      self.cmdHandler = cmdHandler
      self.stream = stream
    }
  }

  /// An asynchronous way to monitor SDAM events that uses `AsyncSequence`.
  /// Only available for Swift 5.5.2 and higher.
  @available(macOS 10.15, *)
  // sourcery: skipSyncExport
  public struct SDAMEventStream {
    fileprivate let stream: AsyncStream<SDAMEvent>
    private let sdamHandler: SDAMEventHandler
    /// Initialize the stream with an `SDAMEventHandler`
    internal init(sdamHandler: SDAMEventHandler, stream: AsyncStream<SDAMEvent>) {
      self.sdamHandler = sdamHandler
      self.stream = stream
    }
  }

  @available(macOS 10.15, *)
  extension CommandEventStream: AsyncSequence {
    /// The type of element produced by this `CommandEventStream`.
    public typealias Element = CommandEvent

    /// The asynchronous iterator of type `CommandEventStreamIterator`
    /// that produces elements of this asynchronous sequence.
    public typealias AsyncIterator = CommandEventStreamIterator

    /// Creates the asynchronous iterator that produces elements of this `CommandEventStream`.
    public func makeAsyncIterator() -> CommandEventStreamIterator {
      CommandEventStreamIterator(cmdEventStream: self)
    }
  }

  @available(macOS 10.15, *)
  extension SDAMEventStream: AsyncSequence {
    /// The type of element produced by this `SDAMEventStream`.
    public typealias Element = SDAMEvent

    /// The asynchronous iterator of type `SDAMEventStreamIterator`
    /// that produces elements of this asynchronous sequence.
    public typealias AsyncIterator = SDAMEventStreamIterator

    /// Creates the asynchronous iterator that produces elements of this `SDAMEventStream`.
    public func makeAsyncIterator() -> SDAMEventStreamIterator {
      SDAMEventStreamIterator(sdamEventStream: self)
    }
  }

  /// The associated iterator for the `CommandEventStream`.
  @available(macOS 10.15, *)
  // sourcery: skipSyncExport
  public struct CommandEventStreamIterator: AsyncIteratorProtocol {
    private var iterator: AsyncStream<CommandEvent>.AsyncIterator
    private let cmdEventStream: CommandEventStream

    /// Initialize the iterator
    internal init(cmdEventStream: CommandEventStream) {
      self.iterator = cmdEventStream.stream.makeAsyncIterator()
      self.cmdEventStream = cmdEventStream
    }

    /// Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.
    public mutating func next() async -> CommandEvent? {
      await self.iterator.next()
    }

    /// The type of element iterated over by this `CommandEventStreamIterator`.
    public typealias Element = CommandEvent
  }

  /// The associated iterator for the `SDAMEventStream`.
  @available(macOS 10.15, *)
  // sourcery: skipSyncExport
  public struct SDAMEventStreamIterator: AsyncIteratorProtocol {
    private var iterator: AsyncStream<SDAMEvent>.AsyncIterator
    private let sdamEventStream: SDAMEventStream

    /// Initialize the iterator
    internal init(sdamEventStream: SDAMEventStream) {
      self.iterator = sdamEventStream.stream.makeAsyncIterator()
      self.sdamEventStream = sdamEventStream
    }

    /// Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.
    public mutating func next() async -> SDAMEvent? {
      await self.iterator.next()
    }

    /// The type of element iterated over by this `SDAMEventStreamIterator`.
    public typealias Element = SDAMEvent
  }

#endif

/// An event published when a command starts.
public struct CommandStartedEvent: MongoSwiftEvent, CommandEventProtocol {
  /// Wrapper around a `mongoc_apm_command_started_t`.
  fileprivate struct MongocCommandStartedEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_command_started_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .command }

  /// The command.
  public let command: BSONDocument

  /// The database name.
  public let databaseName: String

  /// The command name.
  public let commandName: String

  /// The driver generated request id.
  public let requestID: Int64

  /// The driver generated operation id. This is used to link events together such
  /// as bulk write operations.
  public let operationID: Int64

  /// The address of the server the command was run against.
  public let serverAddress: ServerAddress

  /// The service ID for the command, if the driver is in load balancer mode.
  public let serviceID: BSONObjectID?

  fileprivate init(mongocEvent: MongocCommandStartedEvent) {
    // we have to copy because libmongoc owns the pointer.
    self.command = BSONDocument(copying: mongoc_apm_command_started_get_command(mongocEvent.ptr))
    self.databaseName = String(
      cString: mongoc_apm_command_started_get_database_name(mongocEvent.ptr))
    self.commandName = String(cString: mongoc_apm_command_started_get_command_name(mongocEvent.ptr))
    self.requestID = mongoc_apm_command_started_get_request_id(mongocEvent.ptr)
    self.operationID = mongoc_apm_command_started_get_operation_id(mongocEvent.ptr)
    self.serverAddress = ServerAddress(mongoc_apm_command_started_get_host(mongocEvent.ptr))
    if let serviceID = mongoc_apm_command_started_get_service_id(mongocEvent.ptr) {
      self.serviceID = BSONObjectID(bsonOid: serviceID.pointee)
    } else {
      self.serviceID = nil
    }
  }

  fileprivate func toPublishable() -> CommandEvent {
    .started(self)
  }
}

/// An event published when a command succeeds.
public struct CommandSucceededEvent: MongoSwiftEvent, CommandEventProtocol {
  /// Wrapper around a `mongoc_apm_command_succeeded_t`.
  fileprivate struct MongocCommandSucceededEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_command_succeeded_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .command }

  /// The execution time of the event, in microseconds.
  public let duration: Int

  /// The command reply.
  public let reply: BSONDocument

  /// The command name.
  public let commandName: String

  /// The driver generated request id.
  public let requestID: Int64

  /// The driver generated operation id. This is used to link events together such
  /// as bulk write operations.
  public let operationID: Int64

  /// The address of the server the command was run against.
  public let serverAddress: ServerAddress

  /// The service ID for the command, if the driver is in load balancer mode.
  public let serviceID: BSONObjectID?

  fileprivate init(mongocEvent: MongocCommandSucceededEvent) {
    // TODO: SWIFT-349 add logging to check and warn of unlikely int size issues
    self.duration = Int(mongoc_apm_command_succeeded_get_duration(mongocEvent.ptr))
    // we have to copy because libmongoc owns the pointer.
    self.reply = BSONDocument(copying: mongoc_apm_command_succeeded_get_reply(mongocEvent.ptr))
    self.commandName = String(
      cString: mongoc_apm_command_succeeded_get_command_name(mongocEvent.ptr))
    self.requestID = mongoc_apm_command_succeeded_get_request_id(mongocEvent.ptr)
    self.operationID = mongoc_apm_command_succeeded_get_operation_id(mongocEvent.ptr)
    self.serverAddress = ServerAddress(mongoc_apm_command_succeeded_get_host(mongocEvent.ptr))
    if let serviceID = mongoc_apm_command_succeeded_get_service_id(mongocEvent.ptr) {
      self.serviceID = BSONObjectID(bsonOid: serviceID.pointee)
    } else {
      self.serviceID = nil
    }
  }

  fileprivate func toPublishable() -> CommandEvent {
    .succeeded(self)
  }
}

/// An event published when a command fails.
public struct CommandFailedEvent: MongoSwiftEvent, CommandEventProtocol {
  /// Wrapper around a `mongoc_apm_command_failed_t`.
  fileprivate struct MongocCommandFailedEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_command_failed_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .command }

  /// The execution time of the event, in microseconds.
  public let duration: Int

  /// The command name.
  public let commandName: String

  /// The failure, represented as a MongoErrorProtocol.
  public let failure: MongoErrorProtocol

  /// The client generated request id.
  public let requestID: Int64

  /// The driver generated operation id. This is used to link events together such
  /// as bulk write operations.
  public let operationID: Int64

  /// The connection id for the command.
  public let serverAddress: ServerAddress

  /// The service ID for the command, if the driver is in load balancer mode.
  public let serviceID: BSONObjectID?

  fileprivate init(mongocEvent: MongocCommandFailedEvent) {
    self.duration = Int(mongoc_apm_command_failed_get_duration(mongocEvent.ptr))
    self.commandName = String(cString: mongoc_apm_command_failed_get_command_name(mongocEvent.ptr))
    var error = bson_error_t()
    mongoc_apm_command_failed_get_error(mongocEvent.ptr, &error)
    let reply = BSONDocument(copying: mongoc_apm_command_failed_get_reply(mongocEvent.ptr))
    self.failure = extractMongoError(error: error, reply: reply)  // should always return a CommandError
    self.requestID = mongoc_apm_command_failed_get_request_id(mongocEvent.ptr)
    self.operationID = mongoc_apm_command_failed_get_operation_id(mongocEvent.ptr)
    self.serverAddress = ServerAddress(mongoc_apm_command_failed_get_host(mongocEvent.ptr))
    if let serviceID = mongoc_apm_command_failed_get_service_id(mongocEvent.ptr) {
      self.serviceID = BSONObjectID(bsonOid: serviceID.pointee)
    } else {
      self.serviceID = nil
    }
  }

  fileprivate func toPublishable() -> CommandEvent {
    .failed(self)
  }
}

/// An SDAM monitoring event related to topology updates.
public enum SDAMEvent: Publishable {
  /// Published when a topology description changes.
  case topologyDescriptionChanged(TopologyDescriptionChangedEvent)

  /// Published when a topology is initialized.
  case topologyOpening(TopologyOpeningEvent)

  /// Published when a topology is shut down.
  case topologyClosed(TopologyClosedEvent)

  /// Published when a topology's information about a server changes.
  case serverDescriptionChanged(ServerDescriptionChangedEvent)

  /// Published when information about a new server is discovered.
  case serverOpening(ServerOpeningEvent)

  /// Published when a server is removed from a topology and no longer monitored.
  case serverClosed(ServerClosedEvent)

  /// Published when the server monitor’s "hello" command is started - immediately before
  /// the "hello" command is serialized into raw BSON and written to the socket.
  case serverHeartbeatStarted(ServerHeartbeatStartedEvent)

  /// Published when the server monitor’s "hello" command succeeds.
  case serverHeartbeatSucceeded(ServerHeartbeatSucceededEvent)

  /// Published when the server monitor’s "hello" command fails, either with an “ok: 0” or a socket exception.
  case serverHeartbeatFailed(ServerHeartbeatFailedEvent)

  fileprivate func publish(to client: MongoClient) {
    client.sdamEventHandlers.forEach { handler in
      handler.handleSDAMEvent(self)
    }
  }
}

/// Published when a server description changes. This does NOT include changes to the server's roundTripTime property.
public struct ServerDescriptionChangedEvent: MongoSwiftEvent {
  /// Wrapper around a `mongoc_apm_server_changed_t`.
  fileprivate struct MongocServerChangedEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_server_changed_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

  /// The connection ID (host/port pair) of the server.
  public let serverAddress: ServerAddress

  /// A unique identifier for the topology.
  public let topologyID: BSONObjectID

  /// The previous server description.
  public let previousDescription: ServerDescription

  /// The new server description.
  public let newDescription: ServerDescription

  fileprivate init(mongocEvent: MongocServerChangedEvent) {
    self.serverAddress = ServerAddress(mongoc_apm_server_changed_get_host(mongocEvent.ptr))
    var oid = bson_oid_t()
    withUnsafeMutablePointer(to: &oid) { oidPtr in
      mongoc_apm_server_changed_get_topology_id(mongocEvent.ptr, oidPtr)
    }
    self.topologyID = BSONObjectID(bsonOid: oid)
    self.previousDescription =
      ServerDescription(mongoc_apm_server_changed_get_previous_description(mongocEvent.ptr))
    self.newDescription = ServerDescription(
      mongoc_apm_server_changed_get_new_description(mongocEvent.ptr))
  }

  fileprivate func toPublishable() -> SDAMEvent {
    .serverDescriptionChanged(self)
  }
}

/// Published when a server is initialized.
public struct ServerOpeningEvent: MongoSwiftEvent {
  /// Wrapper around a `mongoc_apm_server_opening_t`.
  fileprivate struct MongocServerOpeningEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_server_opening_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

  /// The connection ID (host/port pair) of the server.
  public let serverAddress: ServerAddress

  /// A unique identifier for the topology.
  public let topologyID: BSONObjectID

  fileprivate init(mongocEvent: MongocServerOpeningEvent) {
    self.serverAddress = ServerAddress(mongoc_apm_server_opening_get_host(mongocEvent.ptr))
    var oid = bson_oid_t()
    withUnsafeMutablePointer(to: &oid) { oidPtr in
      mongoc_apm_server_opening_get_topology_id(mongocEvent.ptr, oidPtr)
    }
    self.topologyID = BSONObjectID(bsonOid: oid)
  }

  fileprivate func toPublishable() -> SDAMEvent {
    .serverOpening(self)
  }
}

/// Published when a server is closed.
public struct ServerClosedEvent: MongoSwiftEvent {
  /// Wrapper around a `mongoc_apm_server_closed_t`.
  fileprivate struct MongocServerClosedEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_server_closed_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

  /// The connection ID (host/port pair) of the server.
  public let serverAddress: ServerAddress

  /// A unique identifier for the topology.
  public let topologyID: BSONObjectID

  fileprivate init(mongocEvent: MongocServerClosedEvent) {
    self.serverAddress = ServerAddress(mongoc_apm_server_closed_get_host(mongocEvent.ptr))
    var oid = bson_oid_t()
    withUnsafeMutablePointer(to: &oid) { oidPtr in
      mongoc_apm_server_closed_get_topology_id(mongocEvent.ptr, oidPtr)
    }
    self.topologyID = BSONObjectID(bsonOid: oid)
  }

  fileprivate func toPublishable() -> SDAMEvent {
    .serverClosed(self)
  }
}

/// Published when a topology description changes.
public struct TopologyDescriptionChangedEvent: MongoSwiftEvent {
  /// Wrapper around a mongoc_apm_topology_changed_t.
  fileprivate struct MongocTopologyChangedEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_topology_changed_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

  /// A unique identifier for the topology.
  public let topologyID: BSONObjectID

  /// The old topology description.
  public let previousDescription: TopologyDescription

  /// The new topology description.
  public let newDescription: TopologyDescription

  fileprivate init(mongocEvent: MongocTopologyChangedEvent) {
    var oid = bson_oid_t()
    withUnsafeMutablePointer(to: &oid) { oidPtr in
      mongoc_apm_topology_changed_get_topology_id(mongocEvent.ptr, oidPtr)
    }
    self.topologyID = BSONObjectID(bsonOid: oid)
    self.previousDescription =
      TopologyDescription(mongoc_apm_topology_changed_get_previous_description(mongocEvent.ptr))
    self.newDescription = TopologyDescription(
      mongoc_apm_topology_changed_get_new_description(mongocEvent.ptr))
  }

  fileprivate func toPublishable() -> SDAMEvent {
    .topologyDescriptionChanged(self)
  }
}

/// Published when a topology is initialized.
public struct TopologyOpeningEvent: MongoSwiftEvent {
  /// Wrapper around a mongoc_apm_topology_opening_t.
  fileprivate struct MongocTopologyOpeningEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_topology_opening_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

  /// A unique identifier for the topology.
  public let topologyID: BSONObjectID

  fileprivate init(mongocEvent: MongocTopologyOpeningEvent) {
    var oid = bson_oid_t()
    withUnsafeMutablePointer(to: &oid) { oidPtr in
      mongoc_apm_topology_opening_get_topology_id(mongocEvent.ptr, oidPtr)
    }
    self.topologyID = BSONObjectID(bsonOid: oid)
  }

  fileprivate func toPublishable() -> SDAMEvent {
    .topologyOpening(self)
  }
}

/// Published when a topology is closed.
public struct TopologyClosedEvent: MongoSwiftEvent {
  /// Wrapper around a mongoc_apm_topology_closed_t.
  fileprivate struct MongocTopologyClosedEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_topology_closed_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

  /// A unique identifier for the topology.
  public let topologyID: BSONObjectID

  fileprivate init(mongocEvent: MongocTopologyClosedEvent) {
    var oid = bson_oid_t()
    withUnsafeMutablePointer(to: &oid) { oidPtr in
      mongoc_apm_topology_closed_get_topology_id(mongocEvent.ptr, oidPtr)
    }
    self.topologyID = BSONObjectID(bsonOid: oid)
  }

  fileprivate func toPublishable() -> SDAMEvent {
    .topologyClosed(self)
  }
}

/// Published when the server monitor’s "hello" command is started - immediately before
/// the "hello" command is serialized into raw BSON and written to the socket.
public struct ServerHeartbeatStartedEvent: MongoSwiftEvent {
  /// Wrapper around a `mongoc_apm_server_heartbeat_started_t`.
  fileprivate struct MongocServerHeartbeatStartedEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_server_heartbeat_started_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

  /// The address of the server.
  public let serverAddress: ServerAddress

  fileprivate init(mongocEvent: MongocServerHeartbeatStartedEvent) {
    self.serverAddress = ServerAddress(
      mongoc_apm_server_heartbeat_started_get_host(mongocEvent.ptr))
  }

  fileprivate func toPublishable() -> SDAMEvent {
    .serverHeartbeatStarted(self)
  }
}

/// Published when the server monitor’s "hello" command succeeds.
public struct ServerHeartbeatSucceededEvent: MongoSwiftEvent {
  /// Wrapper around a `mongoc_apm_server_heartbeat_succeeded_t`.
  fileprivate struct MongocServerHeartbeatSucceededEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_server_heartbeat_succeeded_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

  /// The execution time of the event, in microseconds.
  public let duration: Int

  /// The command reply.
  public let reply: BSONDocument

  /// The address of the server.
  public let serverAddress: ServerAddress

  fileprivate init(mongocEvent: MongocServerHeartbeatSucceededEvent) {
    self.duration = Int(mongoc_apm_server_heartbeat_succeeded_get_duration(mongocEvent.ptr))
    // we have to copy because libmongoc owns the pointer.
    self.reply = BSONDocument(
      copying: mongoc_apm_server_heartbeat_succeeded_get_reply(mongocEvent.ptr))
    self.serverAddress = ServerAddress(
      mongoc_apm_server_heartbeat_succeeded_get_host(mongocEvent.ptr))
  }

  fileprivate func toPublishable() -> SDAMEvent {
    .serverHeartbeatSucceeded(self)
  }
}

/// Published when the server monitor’s "hello" command fails, either with an “ok: 0” or a socket exception.
public struct ServerHeartbeatFailedEvent: MongoSwiftEvent {
  /// Wrapper around a `mongoc_apm_server_heartbeat_failed_t`.
  fileprivate struct MongocServerHeartbeatFailedEvent: MongocEvent {
    fileprivate let ptr: OpaquePointer

    fileprivate init(_ eventPtr: OpaquePointer) {
      self.ptr = eventPtr
    }

    fileprivate var context: UnsafeMutableRawPointer? {
      mongoc_apm_server_heartbeat_failed_get_context(self.ptr)
    }
  }

  fileprivate static var monitoringComponent: MonitoringComponent { .sdam }

  /// The execution time of the event, in microseconds.
  public let duration: Int

  /// The failure.
  public let failure: MongoErrorProtocol

  /// The address of the server.
  public let serverAddress: ServerAddress

  fileprivate init(mongocEvent: MongocServerHeartbeatFailedEvent) {
    self.duration = Int(mongoc_apm_server_heartbeat_failed_get_duration(mongocEvent.ptr))
    var error = bson_error_t()
    mongoc_apm_server_heartbeat_failed_get_error(mongocEvent.ptr, &error)
    self.failure = extractMongoError(error: error)
    self.serverAddress = ServerAddress(mongoc_apm_server_heartbeat_failed_get_host(mongocEvent.ptr))
  }

  fileprivate func toPublishable() -> SDAMEvent {
    .serverHeartbeatFailed(self)
  }
}

/// Callbacks that will be set for events with the corresponding names if the user enables
/// monitoring for those events. These functions will parse the libmongoc events and publish the results
/// to the user-specified event handler.

/// A callback that will be set for "command started" events if the user enables command monitoring.
private func commandStarted(_ eventPtr: OpaquePointer?) {
  publishEvent(type: CommandStartedEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "command succeeded" events if the user enables command monitoring.
private func commandSucceeded(_ eventPtr: OpaquePointer?) {
  publishEvent(type: CommandSucceededEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "command failed" events if the user enables command monitoring.
private func commandFailed(_ eventPtr: OpaquePointer?) {
  publishEvent(type: CommandFailedEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "server description changed" events if the user enables server monitoring.
private func serverDescriptionChanged(_ eventPtr: OpaquePointer?) {
  publishEvent(type: ServerDescriptionChangedEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "server opening" events if the user enables server monitoring.
private func serverOpening(_ eventPtr: OpaquePointer?) {
  publishEvent(type: ServerOpeningEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "server closed" events if the user enables server monitoring.
private func serverClosed(_ eventPtr: OpaquePointer?) {
  publishEvent(type: ServerClosedEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "topology description changed" events if the user enables server monitoring.
private func topologyDescriptionChanged(_ eventPtr: OpaquePointer?) {
  publishEvent(type: TopologyDescriptionChangedEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "topology opening" events if the user enables server monitoring.
private func topologyOpening(_ eventPtr: OpaquePointer?) {
  publishEvent(type: TopologyOpeningEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "topology closed" events if the user enables server monitoring.
private func topologyClosed(_ eventPtr: OpaquePointer?) {
  publishEvent(type: TopologyClosedEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "server heartbeat started" events if the user enables server monitoring.
private func serverHeartbeatStarted(_ eventPtr: OpaquePointer?) {
  publishEvent(type: ServerHeartbeatStartedEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "server heartbeat succeeded" events if the user enables server monitoring.
private func serverHeartbeatSucceeded(_ eventPtr: OpaquePointer?) {
  publishEvent(type: ServerHeartbeatSucceededEvent.self, eventPtr: eventPtr)
}

/// A callback that will be set for "server heartbeat failed" events if the user enables server monitoring.
private func serverHeartbeatFailed(_ eventPtr: OpaquePointer?) {
  publishEvent(type: ServerHeartbeatFailedEvent.self, eventPtr: eventPtr)
}

/// Publish an event to the client responsible for this event.
private func publishEvent<T: MongoSwiftEvent>(type: T.Type, eventPtr: OpaquePointer?) {
  guard let eventPtr = eventPtr else {
    fatalError("Missing event pointer for \(type)")
  }
  // The underlying pointer is only valid within the registered callback, so this event should not escape this scope.
  let mongocEvent = type.MongocEventType(eventPtr)

  guard let context = mongocEvent.context else {
    fatalError("Missing context for \(type)")
  }
  let client = Unmanaged<MongoClient>.fromOpaque(context).takeUnretainedValue()

  // only create Swift events if handlers are actually registered for this type of event.
  switch type.monitoringComponent {
  case .sdam:
    guard !client.sdamEventHandlers.isEmpty else {
      return
    }
  case .command:
    guard !client.commandEventHandlers.isEmpty else {
      return
    }
  }

  let event = type.init(mongocEvent: mongocEvent)
  event.toPublishable().publish(to: client)
}

/// An extension of `ConnectionPool` to add monitoring capability for commands and server discovery and monitoring.
extension ConnectionPool {
  /// Internal function to install monitoring callbacks for this pool. **This method may only be called before any
  /// connections are checked out from the pool.**
  internal func initializeMonitoring(client: MongoClient) {
    guard let callbacks = mongoc_apm_callbacks_new() else {
      fatalError("failed to initialize new mongoc_apm_callbacks_t")
    }

    mongoc_apm_set_command_started_cb(callbacks, commandStarted)
    mongoc_apm_set_command_succeeded_cb(callbacks, commandSucceeded)
    mongoc_apm_set_command_failed_cb(callbacks, commandFailed)

    mongoc_apm_set_server_changed_cb(callbacks, serverDescriptionChanged)
    mongoc_apm_set_server_opening_cb(callbacks, serverOpening)
    mongoc_apm_set_server_closed_cb(callbacks, serverClosed)
    mongoc_apm_set_topology_changed_cb(callbacks, topologyDescriptionChanged)
    mongoc_apm_set_topology_opening_cb(callbacks, topologyOpening)
    mongoc_apm_set_topology_closed_cb(callbacks, topologyClosed)
    mongoc_apm_set_server_heartbeat_started_cb(callbacks, serverHeartbeatStarted)
    mongoc_apm_set_server_heartbeat_succeeded_cb(callbacks, serverHeartbeatSucceeded)
    mongoc_apm_set_server_heartbeat_failed_cb(callbacks, serverHeartbeatFailed)

    self.setAPMCallbacks(callbacks: callbacks, client: client)
  }
}
