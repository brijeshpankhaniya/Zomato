import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [btnNameReact,setBtnNameReact] =useState("logIn");
    let btnName ="Login";
    console.log("header Renders")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-Items">
          <ul>
          <li>Home</li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnNameReact == "LogOut" ? setBtnNameReact("LogIn"):setBtnNameReact("LogOut");
            // setBtnNameReact("LogOut");
          }}>{btnNameReact}</button>
          </ul>
        </div>

      </div>
    );
  };
  export default Header;