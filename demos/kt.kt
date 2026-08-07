package com.example.hunter

import java.time.LocalDate

/**
 * A simple author model used to showcase Kotlin token colors.
 *
 * @param firstName given name
 * @param lastName family name
 * @param yearBorn year of birth
 */
data class Author(
  val firstName: String,
  val lastName: String,
  val yearBorn: Int,
) {
  fun getFullName(): String {
    return "$firstName $lastName"
  }

  fun describe(): String {
    val age = LocalDate.now().year - yearBorn
    return "${getFullName()} ($age years old)"
  }
}

// Lifecycle status for a published work
enum class BookStatus {
  DRAFT,
  REVIEW,
  PUBLISHED,
  ARCHIVED,
}

class Library(private val name: String) {
  private val authors = mutableListOf<Author>()

  fun addAuthor(author: Author) {
    authors.add(author)
    println("Added ${author.getFullName()} to $name")
  }

  fun findByLastName(lastName: String): Author? {
    return authors.find { it.lastName == lastName }
  }

  fun statusLabel(status: BookStatus): String {
    return when (status) {
      BookStatus.DRAFT -> "Work in progress"
      BookStatus.REVIEW -> "Awaiting review"
      BookStatus.PUBLISHED -> "Available now"
      BookStatus.ARCHIVED -> "No longer listed"
    }
  }
}

fun main() {
  // Create a new Author
  val author = Author("Douglas", "Adams", 1952)
  val library = Library("One Hunter Library")

  library.addAuthor(author)

  val message = """
    Welcome, ${author.getFullName()}!
    Status: ${library.statusLabel(BookStatus.PUBLISHED)}
  """.trimIndent()

  println(message)
  println(author.describe())
}
