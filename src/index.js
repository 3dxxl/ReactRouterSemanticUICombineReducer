import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//brauch ich nichtmehr wegen AppContainer
//import Startseite from './Startseite';

import registerServiceWorker from './registerServiceWorker';



//react router
import { HashRouter, Route } from "react-router-dom";
import ZweiteSeite from './ZweiteSeite';
import Navigation from './Navigation';
import DritteSeite from './DritteSeite';

//redux
import {AppContainer} from './Startseite';
import {store} from './redux/MeinStore';
import {Provider} from 'react-redux';


//Semantic CSS importieren sonst geht semantic styles nicht
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(

<Provider store={store}>

<HashRouter>
    
<div>

 <Navigation/>

<Route exact={true} path={"/"} component={AppContainer}/>
<Route path={"/ZweiteSeite"} component={ZweiteSeite}/>
<Route path={"/DritteSeite"} component={DritteSeite}/>

</div>
</HashRouter>

</Provider>,

document.getElementById('root'));
registerServiceWorker();
