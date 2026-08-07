# A simple author model used to showcase Ruby token colors.

module BookStatus
  DRAFT = :draft
  REVIEW = :review
  PUBLISHED = :published
  ARCHIVED = :archived
end

class Author
  attr_accessor :first_name, :last_name, :year_born

  def initialize(first_name, last_name, year_born)
    @first_name = first_name
    @last_name = last_name
    @year_born = year_born
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  def describe
    age = Time.now.year - @year_born
    "#{full_name} (#{age} years old)"
  end
end

class Library
  def initialize(name)
    @name = name
    @authors = []
  end

  def add_author(author)
    @authors << author
    puts "Added #{author.full_name} to #{@name}"
  end

  def find_by_last_name(last_name)
    @authors.find { |author| author.last_name == last_name }
  end

  def status_label(status)
    case status
    when BookStatus::DRAFT then "Work in progress"
    when BookStatus::REVIEW then "Awaiting review"
    when BookStatus::PUBLISHED then "Available now"
    when BookStatus::ARCHIVED then "No longer listed"
    else "Unknown"
    end
  end
end

# Create a new Author
author = Author.new("Douglas", "Adams", 1952)
library = Library.new("One Hunter Library")

library.add_author(author)

message = <<~MSG
  Welcome, #{author.full_name}!
  Status: #{library.status_label(BookStatus::PUBLISHED)}
MSG

puts message
puts author.describe
