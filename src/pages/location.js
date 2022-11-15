import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/categories';
import Model from '../components/Model';

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
            <div className="modal">
       <Model id="modal"/> 
      </div>
        </>
    )
}

export default Location
