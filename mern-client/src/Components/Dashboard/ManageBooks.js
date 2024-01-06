import { Table, TableBody, TableHead, TableHeadCell, TableRow, TableCell } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:4040/all-books");
                if (response.ok) {
                    const data = await response.json();
                    setBooks(Array.isArray(data?.data) ? data.data : []);
                }
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    // Delete Book

    const handleDelete = async (id) => {
        try {
            const deleteResponse = await fetch(`http://localhost:4040/book/${id}`, {
                method: "DELETE"
            });

            if (deleteResponse.ok) {
                alert("Book Deleted Successfully");

                // Refetch the updated list of books after successful deletion
                const response = await fetch("http://localhost:4040/all-books");
                if (response.ok) {
                    const data = await response.json();
                    setBooks(Array.isArray(data?.data) ? data.data : []);
                }
            } else {
                throw new Error("Failed to delete book");
            }
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }



    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

            <Table className='lg:w-[1180px]'>
                <TableHead>
                    <TableHeadCell>No.</TableHeadCell>
                    <TableHeadCell>Book Name</TableHeadCell>
                    <TableHeadCell>Author Name</TableHeadCell>
                    <TableHeadCell>Category</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>Edit or Manage</TableHeadCell>
                </TableHead>

                <TableBody className='divide-y'>
                    {books.map((book, index) => (
                        <BookRow key={book._id} book={book} index={index} handleDelete={handleDelete} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

const BookRow = ({ book, index, handleDelete }) => {
    return (
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell>{index + 1}</TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
            </TableCell>
            <TableCell>{book.authorName}</TableCell>
            <TableCell>{book.category}</TableCell>
            <TableCell>$$10.0</TableCell>
            <TableCell >
                <Link to={`/admin/dashboard/edit-book/${book._id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                    Edit
                </Link>
                <button
                    onClick={() => {
                        handleDelete(book._id)
                    }}
                    className='bg-red-600 px-4 py-1 font-semibold text-white rounded-xl hover:bg-sky-600'>
                    Delete
                </button>
            </TableCell>
        </TableRow>
    );
};

export default ManageBooks;
