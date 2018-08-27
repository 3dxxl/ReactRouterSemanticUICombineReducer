import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Startseite from './Startseite';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from "react-router-dom";
import ZweiteSeite from './ZweiteSeite';
import Navigation from './Navigation';
import DritteSeite from './DritteSeite';


ReactDOM.render(

<HashRouter>

<div>

 <Navigation/>

<Route exact={true} path={"/"} component={Startseite}/>
<Route path={"/ZweiteSeite"} component={ZweiteSeite}/>
<Route path={"/DritteSeite"} component={DritteSeite}/>

</div>
</HashRouter>,


document.getElementById('root'));
registerServiceWorker();
