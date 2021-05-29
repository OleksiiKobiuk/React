import {createStore} from 'redux';
import {rootReducer} from './reducers';  //зборщих зайде в папку reducers,
//знайде файл index.js, із нього дістане дефолтний експорт

export const store = createStore(rootReducer);