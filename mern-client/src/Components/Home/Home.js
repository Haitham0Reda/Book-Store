import React from 'react'
import Banner from '../Banner/Banner'
import { BestSellerBooks } from '../BestSellerBooks/BestSellerBooks'
import FavBooks from '../FavBooks/FavBooks'

const Home = () => {
    return (
        <>
            <Banner />
            <BestSellerBooks />
            <FavBooks/>
        </>
    )
}

export default Home