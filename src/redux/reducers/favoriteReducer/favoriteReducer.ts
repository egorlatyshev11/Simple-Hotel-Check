// @ts-nocheck

import { omit } from "lodash";
import { getLocalStorage } from "shared/helpers/localStorage";

import {
  ADD_HOTEL_TO_FAVORITE,
  REMOVE_HOTEL_FROM_FAVORITE,
} from "./favoriteActions";

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_HOTEL_TO_FAVORITE:
      return [...state, action.payload];
    case REMOVE_HOTEL_FROM_FAVORITE:
      return state.filter((_, id) => id !== action.payload);

    default:
      return state;
  }
};

export default favoriteReducer;
