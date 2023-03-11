//@ts-nocheck

import { GET_HOTELS_SUCCESS } from "./getHotelsActions";

const getHotelsReducer = (state = { hotels: [] }, action) => {
  switch (action.type) {
    case GET_HOTELS_SUCCESS:
      return { ...state, hotels: action.hotels };
    default:
      return state;
  }
};

export default getHotelsReducer;
