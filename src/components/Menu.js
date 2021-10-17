/* eslint-disable react/prop-types */
import React from "react";
import { NavLink, Link } from "react-router-dom";

function Menu({ click, setClick }) {
  
  return (
    <ul className={click ? "open" : ""}>
      <div className="top-sm">
      <div
        className={click ? "hamburger change" : "hamburger"}
        onClick={() => setClick(false)}
      >
        <span></span>
      </div>
      <Link to="/" onClick={() => setClick(false)}>
        <img src="./Images/logo.jpg" alt="" /></Link>
        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Aliquam, earum.</p>
      </div>
      <li onClick={() => setClick(false)}>
        <NavLink exact activeClassName="active" to="/news">
          News 
        </NavLink>
      </li>
      <li onClick={() => setClick(false)}>
        <NavLink activeClassName="active" to="/politics">
          Politics 
        </NavLink>
      </li>
      <li onClick={() => setClick(false)}>
        <NavLink activeClassName="active" to="/business">
          Business 
        </NavLink>
      </li>
      <li onClick={() => setClick(false)}>
        <NavLink activeClassName="active" to="/healthy">
          Healthy 
        </NavLink>
      </li>
      <li onClick={() => setClick(false)}>
        <NavLink activeClassName="active" to="/ga">
          Gender Advocacy
        </NavLink>
      </li>
      <li onClick={() => setClick(false)}>
        <NavLink activeClassName="active" to="/hi">
          Human Interest 
        </NavLink>
      </li>
      <li onClick={() => setClick(false)}>
        <NavLink activeClassName="active" to="/entertainment">
          Entertainment 
        </NavLink>
      </li>
      <li onClick={() => setClick(false)}>
        <NavLink activeClassName="active" to="/sport">
          Sport 
        </NavLink>
      </li>
      <li>
        <a href="#">More</a>
      </li>
    </ul>
  );
}

export default Menu;
