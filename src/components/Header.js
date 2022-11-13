import React from 'react';
import { useState } from 'react';

function Header() {
    function Popper() {
        let modal = document.querySelector(".modal");
        modal.classList.toggle("modal")
    }
    function menubar(){
       let menu = document.querySelector("#mobile-Hamburger");
       let navlist = document.querySelector(".nav-container");
       menu.classList.toggle("Hamburger-close")
       navlist.classList.toggle("list-mobile")
    }
    

    return (
        <React.Fragment>
            <nav>
                <div className="brand-container">
                    <div className="nav-brand"></div>
                </div>
                <div className="list-mobile nav-container">
                    <div className="container-flex ">
                        <ul className="list-mobile container-flex ">
                            <li className='list-item'><a href="/">Home</a></li>
                            <li className='list-item'><a href="/shop">Place to Stay</a></li>
                            <li className='list-item'><a href="/">NFT</a></li>
                            <li className='list-item'><a href="/">Community</a></li>
                            <div class="btn" onClick={Popper} >
                            <a href="#" className="connect">Connect Wallet</a>
                        </div>
                        </ul> 
                    </div>
                </div>

                <div onClick={menubar} id="mobile-Hamburger" className="Hamburger"></div>
            </nav>

        </React.Fragment>
    )
}

export default Header
