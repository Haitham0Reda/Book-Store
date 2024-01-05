import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
    // State
    const [books, setBooks] = useState([]);

    // Fetch All Books
    useEffect(() => {
        fetch("http://localhost:4040/all-books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const allBooks = Array.isArray(books?.data) ? books.data : [];

    return (
        <div className='banner'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper !w-44	"
            >
                {
                    allBooks.map((book) => (
                        <SwiperSlide key={book._id}>
                            <img src={book.imageURL} alt="" className='rounded' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default BannerCard