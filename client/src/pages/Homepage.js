import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries.js';
import ProductsList from '../components/ProductsList.js';

const Homepage = () => {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];
    console.log(products);

    return (
        <main>
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <ProductsList></ProductsList>
            <Footer></Footer>
        </div>
        </main>
    )
}

export default Homepage