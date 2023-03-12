// @ts-nocheck

import { omit } from "lodash";

import {
  ADD_HOTEL_TO_FAVORITE,
  REMOVE_HOTEL_FROM_FAVORITE,
} from "./favoriteActions";

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOTEL_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_HOTEL_FROM_FAVORITE:
      return omit(state, [action.payload]);

    default:
      return state;
  }
};

export default favoriteReducer;
