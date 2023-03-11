// @ts-nocheck
import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  GET_HOTELS_FETCH,
  GET_HOTELS_SUCCESS,
} from "redux/reducers/getHotelsReducer/getHotelsActions";
import { getHotelsApi } from "shared/helpers/getHotelsApi";

export const getInfo = (state) => state.getInfo;

async function hotelsFetch(info) {
  const data = await getHotelsApi(info);

  return data.data;
}

function* workGetHotelsFetch() {
  let info = yield select(getInfo);

  const hotels = yield call(hotelsFetch, info);

  yield put({ type: GET_HOTELS_SUCCESS, hotels });
}

function* getHotelsSaga() {
  yield takeEvery(GET_HOTELS_FETCH, workGetHotelsFetch);
}

export default getHotelsSaga;
