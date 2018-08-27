import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Startseite from './Startseite';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from "react-router-dom";
import ZweiteSeite from './ZweiteSeite';
import Navigation from './Navigation';


ReactDOM.render(

<HashRouter>

<div>

 <Navigation/>

<Route exact={true} path={"/"} component={Startseite}/>
<Route path={"/ZweiteSeite"} component={ZweiteSeite}/>
</div>
</HashRouter>,


document.getElementById('root'));
registerServiceWorker();
