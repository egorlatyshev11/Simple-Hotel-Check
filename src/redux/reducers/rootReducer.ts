import { combineReducers } from "redux";

import getHotelsReducer from "./getHotelsReducer/getHotelsReducer";
import getInfoReducer from "./getInfoReducer/getInfoReducer";

const rootReducer = combineReducers({
  getHotels: getHotelsReducer,
  getInfo: getInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
