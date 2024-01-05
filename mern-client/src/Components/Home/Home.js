import React from 'react'
import Banner from '../Banner/Banner'
import { BestSellerBooks } from '../BestSellerBooks/BestSellerBooks'
import FavBooks from '../FavBooks/FavBooks'
import PromoBanner from '../PromoBanner/PromoBanner'
import OtherBooks from '../OtherBooks/OtherBooks'
import Review from '../Review/Review'


const Home = () => {
    return (
        <>
            <Banner />
            <BestSellerBooks />
            <FavBooks />
            <PromoBanner />
            <OtherBooks />
            <Review />
            
        </>
    )
}

export default Home