// Provider.js

import React from 'react';
import {Provider} from 'react-redux';

import store from './store';

const PlaceProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default PlaceProvider;
