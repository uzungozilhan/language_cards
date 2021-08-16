// import logo from './components/assets/react.svg';
import './Header.css';
import React from "react";
import react from "./react.svg";

const Header = () => {
    return (
        <div className="react-logo-header">
            
            <img src={react} className="react-logo" alt="React Logo" />
            
            
        </div> 
       
    )
}
export default Header;