import { combineReducers } from "redux";

import getHotelsReducer from "./getHotelsReducer/getHotelsReducer";
import getInfoReducer from "./getInfoReducer/getInfoReducer";
import favoriteReducer from "./favoriteReducer/favoriteReducer";

const rootReducer = combineReducers({
  getHotels: getHotelsReducer,
  getInfo: getInfoReducer,
  favoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
