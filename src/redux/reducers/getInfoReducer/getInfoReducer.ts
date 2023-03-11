// @ts-nocheck

import { currentDate } from "shared/helpers/date";
import { CHANGE_INPUT_VALUE } from "./getInfoActions";

const initialState = {
  location: "Москва",
  date: currentDate,
  days: "1",
};

const getInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        location: action.payload.location,
        date: action.payload.date,
        days: action.payload.days,
      };
    default:
      return state;
  }
};

export default getInfoReducer;
