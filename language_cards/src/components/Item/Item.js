import React, { useState } from "react";
import Card from "../card/Card";
import "../card/Card.css";

function Item({card}) {
    const [showImage, setShowImage] = useState(true);
    return (
        <div className="card-info" onClick={() => setShowImage(!showImage)}>

          {showImage ? (
          <>
            <img src={card.img} className="card-image" alt={card.name}/>
            <h4 className="card-name">{card.name}</h4>
          </>
          ) : (
          <>
            <div className="card-over">
              <ul className="card-options">
                <li>{ card.options[0]}</li>
                <li>{ card.options[1]}</li>
                <li>{ card.options[2]}</li>
              </ul>                 
            </div>
          </>
)}            
        </div>
      );
}

export default Item;