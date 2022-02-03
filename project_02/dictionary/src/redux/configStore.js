import { createStore, combineReducers, applyMiddleware  } from "redux";
import word from "./modules/word";
import thunk from 'redux-thunk'
import edit from './modules/edit'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["edit"]
  };

const middlewares = [thunk]

const rootReducer = combineReducers({ word, edit });
const enhancer = applyMiddleware(...middlewares);
const enhancedReducer = persistReducer(persistConfig, rootReducer);
            
const store = createStore(enhancedReducer, enhancer);

export default store;