import React from 'react'

function Footer() {
    return (
        <>
            <section className='Footer-section'>
                <div className="Footer-wrapper ">
                    <div className='section-container footer-top-gap'>
                        <div>
                            <div className="Brand-logo">

                            </div>
                            <div className='social-network'>
                                <i className='facebook'></i>
                                
                                <i className='instagram'></i>
                                <i className='twitter'></i>
                            </div>
                            <div className='social-media'>

                            </div>
                        </div>
                        <div className=" footer-list">
                            <ul> <li className='list-title'>Community</li>
                                <li>NFT</li>
                                <li>Tokens</li>
                                <li>Landlords</li>
                                <li>Discord</li>
                            </ul>
                            <ul > <li className='list-title'>Places</li>
                                <li>Castle</li>
                                <li>Farms </li>
                                <li>Farms </li>
                                <li>Learn more</li>

                            </ul>
                            <ul ><li className='list-title'>About us</li>
                                <li>Road map</li>
                                <li>Creators </li>
                                <li>Career</li>
                                <li>Contact us</li>
                            </ul>
                        </div>

                    </div>
                  
                </div>
                <div className='copy-footer'>
                <p className='copy-right '> &copy; 2022 Metabnb by Peter Samuel </p>
                </div>
            </section>
        </>
    )
}

export default Footer
