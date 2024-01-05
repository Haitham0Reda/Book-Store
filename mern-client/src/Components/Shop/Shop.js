import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

const Shop = () => {

    //State
    const [books, setBooks] = useState()

    //Hooks
    useEffect(() => {
        fetch("http://localhost:4040/all-books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const allBooks = Array.isArray(books?.data) ? books.data : [];

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center'>
                All Books Are Here
            </h2>

            <div className='gap-6 my-12 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
                {/* Cards Of Books */}
                {
                    allBooks.map((book) => {
                        return (
                            <Card
                            key={book._id}
                            >
                                <img src={book.imageURL} alt="" className='h-80' />
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {book.bookTitle}
                                </h5>
                                <p className="font-sm text-gray-700 dark:text-gray-400">
                                    {book.bookdescription}
                                </p>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shop