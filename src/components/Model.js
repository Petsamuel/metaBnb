import React from 'react';
import "../assets/modal.css";

function Model() {

    function Close() {
        let modal = document.querySelector(".overlay");
        modal.classList.toggle("modal");

    }

    return (
        <>
            <div className='overlay'>
                <div className='overlay-card'>
                    <div className='overlay-card-content'>
                        <div class="connect-wallet">
                            <p>Connect Wallet</p>
                            <div onClick={Close} className="Xclose">X</div>
                        </div>

                        <p class="wallet-text">Choose your preferred wallet:</p>
                        <div className='wallet-option'>
                            <div className="metamask"> <span className='name-icon'> <span class="meta-icon"></span>Metamask</span> <span className="cadet-icon"></span></div>
                            <div className="metamask"> <span className='name-icon'><span class="wallet-icon"></span>Wallet Connect</span> <span className="cadet-icon"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model
