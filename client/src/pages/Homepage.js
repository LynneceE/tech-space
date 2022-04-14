import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries.js';
import ProductList from '../components/ProductList.js';

const Homepage = () => {
    const { data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];
    console.log(products);

    return (
        <main>
        <div>
            <Header />
            <Navbar/>
            <Carousel />
            <ProductList/>
            <Footer />
        </div>
        </main>
    )
}

export default Homepage