import React, { useState } from "react";
import "./Card.css";
import { categories } from "../helper/data";

const Card = () => {
  const [showImage, setShowImage] = useState(true)
  return (
    <div className="card-container">

      <div className="card-header">
        <h2>Languages</h2>
        
      </div>
      {categories.map((card) => {
        return (
          <div className="card-info" onClick={() => setShowImage(!showImage)}>

            {showImage ? (
              <>
                {/* <div className="card-img-and-name"> */}
            <img src={card.img} className="card-image" alt={card.name} />
              <h4 className="card-name">{card.name}</h4>
              {/* </div> */}
            
              </>
            ) : (
              <>
              {/* <div className="card-img-and-name"> */}
          
            {/* </div> */}
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
      })};
    </div>
  );
};

export default Card;

/*
const Card = () => {
  return (
    <div className="card-container">

      <div className="card-header">
        <h2>Languages</h2>
        
      </div>
      {categories.map((card) => {
        return (
          <div className="card-info">
            {/* <div className="card-img-and-name"> */
            /*<img src={card.img} className="card-image" alt={card.name} />
              <h4 className="card-name">{card.name}</h4>*/
              /* </div> */
            /*<div className="card-over">
              <ul className="card-options">
                <li>{ card.options[0]}</li>
                <li>{ card.options[1]}</li>
                <li>{ card.options[2]}</li>
              </ul>
                   
                </div>
          </div>
        );
      })};
    </div>
  );
};*/
