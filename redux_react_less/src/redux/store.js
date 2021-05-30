import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers';  //зборщих зайде в папку reducers,
//знайде файл index.js, із нього дістане дефолтний експорт
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));