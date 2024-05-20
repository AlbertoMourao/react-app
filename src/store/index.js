import { applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';
import { logger } from './middlewares/logger';
import { cardsSlice } from './modules/cardsSlice';
import { counterSlice } from './modules/counterSlice';

const app = combineReducers({
    counter: counterSlice.reducer,
    cards: cardsSlice.reducer,
});

const store = createStore(
    app,
    applyMiddleware(logger), 
);

export default store;
