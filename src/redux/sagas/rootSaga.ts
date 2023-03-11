import { all, fork } from "redux-saga/effects";
import getHotelsSaga from "./getHotelsSaga";

export default function* rootSaga() {
  yield all([fork(getHotelsSaga)]);
}
