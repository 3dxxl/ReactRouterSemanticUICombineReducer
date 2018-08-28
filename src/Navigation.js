import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import  './App.css';

// muss ich einfügen damit react router auch zugang zum redux store hat
import {connect} from 'react-redux';
import { actionCreators } from './redux/actions/MeineActions';

//Semantic UI
import { Menu } from 'semantic-ui-react'

//Die Komponente Navigation kann direkt auf den Store zugreifen, da Sie in der index.js Datei 
//innerhalb von <Provider store={store}> steht und somit jeden zustand über die props abrufen kann
//Wichtig: Aber um zustand Änder in dieser Navogations Komponente zu sehen, muss ich 
//trotzdem noch connect&actionCreators und mapStateToProps Funktion & connect ausführen

//Um Semantic UI mit react router zu verbinden, muss man as={NavLink} zum Link verweis einsetzen, 
//und dann natürlich die jeweitlige adresse z.b. die Startseite mit to="/"


class Navigation extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <div>
          <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
          as={NavLink} 
          to="/"
          style={{color:this.props.farbe, fontFamily: this.props.schriftNav,}}
        >
          Startseite
        </Menu.Item>

        <Menu.Item 
        name='reviews' 
        active={activeItem === 'reviews'} 
        onClick={this.handleItemClick}
        as={NavLink} 
        to="/ZweiteSeite"
        >
          ZweiteSeite
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
          as={NavLink} 
          to="/DritteSeite"
        >
          DritteSeite
        </Menu.Item>
      </Menu>

      </div>
    );
  }
}

//Hier wird state zu props
function mapStateToProps(state) {

  return {

      farbe: state.farbe.farbe,
      schriftNav: state.schriftNav.schriftNav
      
  }
}



export default connect(mapStateToProps, actionCreators)(Navigation);