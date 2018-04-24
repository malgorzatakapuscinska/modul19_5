import {createStore} from 'redux';
import {reducers} from './reducers.js';

// create new store

const store = createStore(reducers);

//add listener

const unsuscribe = store.suscribe(() => console.log(store.getState()));

unsuscribe();

store.dispatch(addComment('komentarz nr 1'));
store.dispatch(addComment('komentarz nr 2'));