//@ts-nocheck
import { useState } from 'react'
import { Modal, Button } from 'antd'
import 'antd/dist/antd.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={(e) => setCount(count + 1)}>Click me</button>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
