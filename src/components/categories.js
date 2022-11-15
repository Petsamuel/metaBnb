import React from 'react'
import Data from "./dataui"
import RatingStar from "./Stars"


function Categories() {
    function Popper(){
        let list_container=document.querySelector(".unordered-list-mobile");
        list_container.classList.toggle("trigger")
        
    }
    return (
        <>
            <nav className="upper-gap">
                <div className=" mobile-list-wrapper" >
                    <div class="category-menu" onClick={Popper}>
                        <span className="line"></span>
                         <span className="line"></span>
                         <span className="line"></span>
                        
                    </div>
                    <ul className="container-flex unordered-list-mobile ">
                        <li className='list-items category-list'>Restaurant</li>
                        <li className="category-list">Cottage</li>
                        <li className="category-list">Castle</li>
                        <li className='category-list'>Fantasy City</li>
                        <li className='category-list'>Beach</li>
                        <li className='category-list'>Cabins</li>
                        <li className='category-list'>Off-grid</li>
                        <li className='category-list'>Farm</li>
                    </ul>
                   <div> <input type="text"  className="locate" Placeholder="Location" /></div>
                </div>
            </nav>
            
            <div className='card-container'>
                <div className='card'>
                    {
                        Data.map((card) => (
                            <div className='card-content' key={card.id}>
                                <div>
                                    <img src={card.image} className="card-image" id={card.id} alt="card-img"/>
                                </div>
                                <div className='card-details'>
                                    <div className='details-1'>
                                        <div className='card-name'>{card.Name}</div>
                                        <div className="card-distance">{card.Distance}</div>
                                    </div>
                                    <div className='details-2'>
                                        <div className='card-duration'>{card.Duration}</div>
                                        <div className="card-place">{card.place}</div>
                                    </div>
                                    <div className="starsLayout details-2">
                                    <RatingStar />
                                </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Categories
