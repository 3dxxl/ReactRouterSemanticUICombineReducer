import {createStore, combineReducers} from 'redux';


import {reducer as NavReducer} from './reducer/NavReducer';
import {reducer as BodyReducer} from './reducer/BodyReducer';


//import {reducer} from './reducer/MeinReducer';

/* export const initialState = {
    farbe: 'green',
    schriftNav: 'Times New Roman    '
}; */

const reducer = combineReducers({
    farbe: BodyReducer,
    schriftNav: NavReducer
});


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
