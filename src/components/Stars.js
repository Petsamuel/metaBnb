import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../App.css"

function Stars() {
    const [rateHover, setRateHover] = useState(-1);
    const highlightRate = (high) => (e) => {
        setRateHover(high);
      };

      const hoverClicked = (rate) => (e) => {
       rate = rate + 1 
        
      };

      function StarLayout() {
        return (
          <>
            <FontAwesomeIcon
              icon={faStar}
              className={ rateHover  > 0 ? "orange" : "primary"}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={ rateHover > 1 ? "orange" : "primary"}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={ rateHover > 2 ? "orange" : "primary"}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={rateHover  > 3 ? "orange" : "primary"}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={ rateHover > 4 ? "orange" : "primary"}
            />
          </>
        );
      }

    return (
        <>
       <div className="rate-container">
              {[...Array(5)].map((e, index) => {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={rateHover > index - 1 ? "primary" : "orange"}
                    onMouseEnter={highlightRate(index)}
                    onMouseLeave={highlightRate(-1)}
                    onClick={hoverClicked(index)}
                  />
                );
              })}
            </div>
        </>
    )
}

export default Stars
