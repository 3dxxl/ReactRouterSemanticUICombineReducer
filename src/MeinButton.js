//React
import React, {Component} from 'react'

//redux
import {connect} from 'react-redux';
import { actionCreators } from './redux/actions/MeineActions';

//Semantic UI
import { Button } from 'semantic-ui-react';

class ButtonExampleColored extends Component {

    render() {

        return(

            <div>
            <div>
                {/*dato und data sind nur erfundene Wörter, diese werden benötigt um 
                  später in der Startseite Komponente, die richtigen this.props... Angaben zu machen.
                  Das muss ich machen da diese ButtonExampleColored keine Child Komponente ist von 
                  Startseite*/}
            </div>
            <div>
            <Button color='red'
            onClick={this.props.dato}
            >Change Color</Button>
            <h1 style={{color:this.props.data}}>Press Button to Change Text Color</h1>
            </div>
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

export default connect(mapStateToProps, actionCreators)(ButtonExampleColored);

  
  