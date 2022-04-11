import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <Categories/>
            <Footer />
        </div>
    )
}

export default Homepage