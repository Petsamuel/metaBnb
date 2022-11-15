import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../App.css"

function Stars() {
    const [rateHover, setRateHover] = useState(-1);

    const highlightRate = (high) => (e) => {
        setRateHover(high);
      };

    return (
        <>
       <div className="rate-container">
              {[...Array(5)].map((e, index) => {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={rateHover > index - 1 ? "orange" : "primary"}
                    
                    onMouseEnter={highlightRate(index)}
                    onMouseLeave={highlightRate(-1)}
                    
                  />
                );
              })}
            </div>
        </>
    )
}

export default Stars
