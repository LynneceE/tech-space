import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
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
            <Navbar/>
            <Categories/>
        </div>
        <div className="col-12 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ProductsList products={products} title="hey here's some product placement" />
            )}
          </div>
        </main>
    )
}

export default Homepage