import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/categories';

function Location() {

    return (
        <>
            <header>
                <Header/>
            </header>
            <div>
                <Categories/>
            </div>
            <div>
                <Footer/> 
            </div>
        </>
    )
}

export default Location
