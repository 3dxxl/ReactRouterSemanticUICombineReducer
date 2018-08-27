import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import  './App.css';

// muss ich einfügen damit react router auch zugang zum redux store hat
import {connect} from 'react-redux';
import { actionCreators } from './redux/actions/MeineActions';

//Die Komponente Navigation kann direkt auf den Store zugreifen, da Sie in der index.js Datei 
//innerhalb von <Provider store={store}> steht und somit jeden zustand über die props abrufen kann
//Wichtig: Aber um zustand Änder in dieser Navogations Komponente zu sehen, muss ich 
//trotzdem noch connect&actionCreators und mapStateToProps Funktion & connect ausführen

class Navigation extends Component {
  render() {
    return (
      <div>
          <ul className="NavStyleUL">

            <li>
            <NavLink to="/" exact style={{color:this.props.farbe}}>Zur Startseite</NavLink>
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

//Hier wird state zu props
function mapStateToProps(state) {

  return {

      farbe: state.farbe
      
  }
}



export default connect(mapStateToProps, actionCreators)(Navigation);