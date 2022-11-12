import React from 'react';
import { useState } from 'react';

function Header() {
    function Popper() {
        let modal = document.querySelector(".modal");
        modal.classList.toggle("modal")
    }

    return (
        <React.Fragment>
            <nav>
                <div className="brand-container">
                    <div className="nav-brand"></div>
                </div>
                <div className="nav-container">
                    <div className="container-flex">
                        <ul className="container-flex list-mobile">
                            <li className='list-item'><a href="/">Home</a></li>
                            <li className='list-item'><a href="/">Place to Stay</a></li>
                            <li className='list-item'><a href="/">NFT</a></li>
                            <li className='list-item'><a href="/">Community</a></li>
                            <div class="btn" onClick={Popper} >
                            <a href="#" className="connect">Connect Wallet</a>
                        </div>
                        </ul> 
                    </div>
                </div>

                <div className='Hamburger'></div>
            </nav>

        </React.Fragment>
    )
}

export default Header
