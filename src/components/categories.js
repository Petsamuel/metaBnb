import React from 'react'
import Data from "./dataui"


function Categories() {
    function Popper(){
        let list_container=document.querySelector(".list-container");
        list_container.classList.toggle("list-container")
        
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
                    <ul className="container-flex  list-container unordered-list-mobile">
                        <li className='list-items'>Restaurant</li>
                        <li>Cottage</li>
                        <li>Castle</li>
                        <li>Fantasy City</li>
                        <li>Beach</li>
                        <li>Cabins</li>
                        <li>Off-grid</li>
                        <li>Farm</li>
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
