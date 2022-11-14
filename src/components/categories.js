import React from 'react'
import Data from "./dataui"

function Categories() {
    
    return (
        <>
            <nav className="upper-gap">
                
                <div className="mobile-list-wrapper" >
                    <ul className="container-flex  list-container unordered-list-mobile">
                   
                        <li className='list-items'>Resturant</li>
                        <li>Cottage</li>
                        <li>Casttle</li>
                        <li>Fantasy City</li>
                        <li>Beach</li>
                        <li>Cabins</li>
                        <li>Off-grid</li>
                        <li>Farm</li>
                    </ul>
                    <input type="text"  className="locate" Placeholder="Location" />
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
