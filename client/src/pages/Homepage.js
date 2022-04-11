import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';

const Homepage = () => {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];
    console.log(products);

    return (
        <div>
            <Navbar/>
            <Categories/>
        </div>
    )
}

export default Homepage