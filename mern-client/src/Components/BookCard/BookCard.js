import React from 'react'
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import { FaCartShopping } from "react-icons/fa6"

const BookCard = ({ books, headLine }) => {

    const allBooks = Array.isArray(books?.data) ? books.data : [];

    return (
        <div className="my-16 px-4 lg:px-24">
            <h2 className="text-5xl text-center font-bold text-black my-5">
                {headLine}
            </h2>

            {/* Cards */}
            <div className='w-full'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,

                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper !w-full !h-full"
                >

                    {
                        allBooks.map((book) => (
                            <SwiperSlide key={book._id}>
                                <Link to={`/book/${book._id}`}>
                                    <div className='relative'>
                                        <img src={book.imageURL} alt="" className="!w-full !h-full" />
                                        <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                                            <FaCartShopping className=' w-4 h-4 text-white' />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h3>{book.bookTitle}</h3>
                                            <p>{book.authorName}</p>
                                        </div>
                                        <div>
                                            <p>$10.00</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default BookCard





