import React from 'react'

function Main() {
    return (
        <>
        <div class="container upper-gap">
           <div className='intro'>
            <div className="hero-text">
            <p > Rant a <span>Place</span> Away from <span>Home</span> in the <span>MultiVerse</span></p>
            <p class="hero-paragraph">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            </div>
            <div className="search-session">
            <input type="text" className='hero-search' placeholder='Search for Location'/>
            <input type="button" id="search-button" value="Search"/>
            </div>
           </div>
        <div>
        </div>
           <div>
                <div className='hero-img'>
                    <div className='img-3'>
                    </div>
                    <div className='img-4'>
                    </div>
                    <div className='img-5'>
                    </div>
                    <div className='img-6'>
                    </div>
                </div>
           </div>
        </div>
       
       
        </>
    )
}

export default Main
