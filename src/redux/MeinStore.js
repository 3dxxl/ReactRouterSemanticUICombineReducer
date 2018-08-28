
import {createStore, combineReducers} from 'redux';

//hier importiere ich die jeweiligen Reducer übergebe gleichzeitig den namen reducer an die neue Bezeichnung 
//z.b. reducer as NavReducer, könnte auch reducer as PeterPanReducer heißen
import {reducer as NavReducer} from './reducer/NavReducer';
import {reducer as BodyReducer} from './reducer/BodyReducer';

//hier wird reducer an den combineReducer übergeben und diese beinhaltet, dann die jeweiligen Sub Reducers
const reducer = combineReducers({
    farbe: BodyReducer,
    schriftNav: NavReducer
});

//hier muss ich jetzt nur noch den reducer als parapmeter einfügen inkl. natürlich noch die redux devtools
//aber eben nicht mehr den initialState dieser wird ja jetzt in den jeweiligen Reducern eingefügt(NavReducer.js & BodyReducer.js)
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
