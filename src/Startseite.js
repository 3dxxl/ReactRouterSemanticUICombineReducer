import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import {actionCreators} from './redux/actions/MeineActions';

//Mein Button mit als import SemanticUI
import ButtonExampleColored  from './MeinButton';


class Startseite extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Das ist die Startseite</h1>
        </header>
        <p className="App-intro">
          Hier ist einfach nur ein Text.
        </p>

      {/*Hier habe ich die props direkt auf die Elemente gesetzt, da diese Elemente Child Komponenten sind
         und somit über den store daten erhalten*/}
        <h1 style={{color:this.props.farbe}}>Hallo</h1>
        <button style={{width: 100, height: 50}} onClick={this.props.nameOffTheActionZwei}>Change Color Again</button>
      
      {/*Hier habe ich die props über ein beliebiges Objekt z.b. data oder dato könnte auch BerndDasBrot heißen
        festgesetzt in der ButtContainer Komponente u. diese dann in der Startseite wieder an den eigentlichen 
        Store verknüpft*/}
          <ButtonExampleColored data={this.props.farbe}
          dato={this.props.nameOffTheAction}
          />

      </div>
    );
  }
}

function mapStateToProps (state) {

  return {farbe: state.farbe}
}
export const AppContainer = connect(mapStateToProps, actionCreators)(Startseite);


export default Startseite;
