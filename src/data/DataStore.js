import { createStore, applyMiddleware } from 'redux';
import { ShopReducer } from './ShopReducer';
import { CartReducer } from './CartReducer';
import { CommonReducer } from './CommonReducer';
import { asyncAction } from './AsyncMiddleware';



export const SportsStoreDataStore 
            = createStore(CommonReducer(ShopReducer, CartReducer), 
                applyMiddleware(asyncAction));