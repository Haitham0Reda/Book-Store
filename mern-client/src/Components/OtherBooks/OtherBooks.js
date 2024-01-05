import React from 'react'
import { useEffect, useState } from "react"
import BookCard from "../BookCard/BookCard";

const OtherBooks = () => {
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
            <BookCard books={books} headLine="Other Books" />
        </div>
    )
}

export default OtherBooks