// reducers.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  placeList: {},
  selectedPlace: null,
  favoritePlaces: [],
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
    addFavoritePlace: (state, action) => {
      const place = action.payload;
      state.favoritePlaces.push(place);
    },
    removeFavoritePlace: (state, action) => {
      const placeId = action.payload;
      state.favoritePlaces = state.favoritePlaces.filter(
        place => place.place_id !== placeId,
      );
    },
  },
});

export const {addPlace, selectPlace, addFavoritePlace, removeFavoritePlace} =
  placeSlice.actions;
export default placeSlice.reducer;
