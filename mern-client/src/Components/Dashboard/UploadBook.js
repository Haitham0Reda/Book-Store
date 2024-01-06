import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const UploadBook = () => {

    const bookCategories = [
        "Fiction",
        "Action & Adventure",
        "Biography & Memoir",
        "Business & Money",
        "Children's Books",
        "Classic Literature",
        "Comedy",
        "Crime & Mystery",
        "Fantasy",
        "Graphic Novels",
        "Historical Fiction",
        "Horror",
        "Nonfiction",
        "Paranormal Romance",
        "Philosophy",
        "Romance",
        "Science Fiction",
        "Self Help"
    ]

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])

    const handelChangeSelectedValue = async (e) => {
        setSelectedBookCategory(e.target.value);
    }

    const handleBookSubmit = async (e) => {
        e.preventDefault()
        const form = e.target

        const bookTitle = form.bookTitle.value
        const authorName = form.authorName.value
        const imageURL = form.imageURL.value
        const category = form.category.value
        const bookdescription = form.bookdescription.value
        const bookPDFURL = form.bookPDFURL.value

        const bookObj = { bookTitle, authorName, imageURL, category, bookdescription, bookPDFURL }
        console.log(bookObj);

        // Send Book Data To DataBase
        
        try {
            const response = await fetch('http://localhost:4040/upload-book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookObj)
            });
    
            if (response.ok) {
                // Reset the form after successful upload
                form.reset();
                console.log('Book uploaded successfully');
                // You can also display a success message or perform other actions here
            } else {
                console.log('Error uploading book');
                // Handle error cases if needed
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle fetch errors if any
        }
    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

            <form onSubmit={ handleBookSubmit } className="flex lg:w-[1180px] flex-wrap flex-col gap-4">
                {/* 1st Row */}
                <div className='flex gap-8'>
                    {/* Book Title */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
                    </div>
                    {/* Author Name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
                    </div>
                </div>
                {/* 2nd Row */}
                <div className='flex gap-8'>
                    {/* Book Image */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
                    </div>
                    {/* Category */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <select
                            className="w-full rounded"
                            id="inputState"
                            name="category"
                            onChange={handelChangeSelectedValue}
                            value={selectedBookCategory}>
                            {
                                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                            }
                        </select>

                    </div>
                </div>
                {/* Book Description */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookdescription" value="Book Description" />
                    </div>
                    <Textarea id="bookdescription" name='bookdescription' placeholder="Book Description..." required rows={5} />
                </div>
                {/* Book PDF URL */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required />
                </div>
                <Button type="submit">Upload Book</Button>
            </form>
        </div>
    )
}

export default UploadBook