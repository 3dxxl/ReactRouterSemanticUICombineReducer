import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import  './App.css';



class Navigation extends Component {
  render() {
    return (
      <div>
          <ul className="NavStyleUL">

            <li>
            <NavLink to="/" exact activeStyle={{color:'black' }}>Zur Startseite</NavLink>
            </li>

            <li>
            <NavLink to="/ZweiteSeite" exact activeStyle={{color:'black'}}>Zur zweiten Seite</NavLink>
            </li>

            <li>
            <NavLink to="/DritteSeite" exact activeStyle={{color:'black'}}>Zur dritten Seite</NavLink>
            </li>

          </ul>

      </div>
    );
  }
}

export default Navigation;
