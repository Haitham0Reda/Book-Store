import React from "react";
import { useEffect, useState } from "react"
import BookCard from "../BookCard/BookCard";

export const BestSellerBooks = () => {
  // State
  const [books, setBooks] = useState([]);

  // Fetch All Books
  useEffect(() => {
    fetch("http://localhost:4040/all-books")
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <div>
      <BookCard books={books} headLine="Best Seller Books" />
    </div>
  )
}
