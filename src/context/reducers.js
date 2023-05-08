// reducers.js

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  placeList: {},
};

const placeSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const {category, place} = action.payload;
      state.placeList = {
        ...state.placeList,
        [category]: place,
      };
    },
  },
});

export const {addPlace} = placeSlice.actions;
export default placeSlice.reducer;
