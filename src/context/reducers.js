// reducers.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  placeList: {},
  selectedPlace: null,
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
    selectPlace: (state, action) => {
      state.selectedPlace = action.payload;
    },
  },
});

export const {addPlace, selectPlace} = placeSlice.actions;
export default placeSlice.reducer;
