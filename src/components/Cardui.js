import Data from "./dataui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";



function Cardui() {
    const [rateHover, setRateHover] = useState(-1);
    const highlightRate = (high) => (e) => {
        setRateHover(high);
      };
      const RatingStar = () => {
        return (
          <div className="rate-container">
              {[...Array(5)].map((e, index) => {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={rateHover > index - 1 ? "primary" : ""}
                    onMouseEnter={highlightRate(index)}
                    onMouseLeave={highlightRate(-1)}
                    onClick={hoverClicked(index)}
                  />
                );
              })}
            </div>
        );
      };
      const hoverClicked = (rate) => (e) => {
       rate = rate + 1 
        
      };

      function StarLayout() {
        return (
          <>
            <FontAwesomeIcon
              icon={faStar}
              className={ true > 0 ? "orange" : ""}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={ true> 1 ? "orange" : ""}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={ true> 2 ? "orange" : ""}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={true > 3 ? "orange" : ""}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={ true> 4 ? "orange" : ""}
            />
            {/* ({SelectedMovie.Stars}) */}
          </>
        );
      }

    return (
        <>
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

export default Cardui;
