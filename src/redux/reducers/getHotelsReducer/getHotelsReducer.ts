//@ts-nocheck

import {
  GET_HOTELS_ERROR,
  GET_HOTELS_FETCH,
  GET_HOTELS_SUCCESS,
} from "./getHotelsActions";

const getHotelsReducer = (
  state = { hotels: [], isLoading: false, isError: false },
  action
) => {
  console.log(state);
  switch (action.type) {
    case GET_HOTELS_SUCCESS:
      return {
        ...state,
        hotels: action.hotels,
        isLoading: false,
        isError: false,
      };
    case GET_HOTELS_FETCH:
      return { ...state, isLoading: true };
    case GET_HOTELS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default getHotelsReducer;
