import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import rootReducer from './reducers'

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);


export default store;
export { persistor, store };
