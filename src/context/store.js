// store.js

import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

console.log('Initial state:', store.getState()); // Başlangıç state'ini konsola yazdır

export default store;
