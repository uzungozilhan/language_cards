import React from "react";
import "./Card.css";
import { categories } from "../helper/data";
import Item from "../Item/Item";

const Card = () => {
  return (
    <div className="card-container">
      
      <div className="card-header">
        <h2>Languages</h2>
      </div>
      
      <div className="card-info-container">
         {categories.map((catElement) => {
            return <Item card={catElement}/>
          })}
      </div>

    </div>
  )  
};

export default Card;

