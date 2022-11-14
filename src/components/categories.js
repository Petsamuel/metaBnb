import React from 'react'
import Data from "./dataui"

function Categories() {
    return (
        <>
        <nav class="upper-gap">
            <ul class="container-flex  list-container">
                <li>Resturant</li>
                <li>Cottage</li>
                <li>Casttle</li>
                <li>Fantasy City</li>
                <li>Beach</li>
                <li>Cabins</li>
                <li>Off-grid</li>
                <li>Farm</li>
            </ul>
            <input type="text" value="Locate"/>
        </nav>
        <div className='container card-container'>
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
