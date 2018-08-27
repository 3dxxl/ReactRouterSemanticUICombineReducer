import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Navigation extends Component {
  render() {
    return (
      <div>
          <ul>

            <li>
            <Link to="/">Zur Startseite</Link>
            </li>
            
            <li>
            <Link to="/ZweiteSeite">Zur zweiten Seite</Link>
            </li>


          </ul>

      </div>
    );
  }
}

export default Navigation;
