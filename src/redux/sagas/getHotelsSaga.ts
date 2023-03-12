// @ts-nocheck
import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  GET_HOTELS_ERROR,
  GET_HOTELS_FETCH,
  GET_HOTELS_SUCCESS,
} from "redux/reducers/getHotelsReducer/getHotelsActions";
import { getHotelsApi } from "shared/helpers/getHotelsApi";

export const getInfo = (state) => state.getInfo;

async function hotelsFetch(info) {
  try {
    const data = await getHotelsApi(info);

    return data.data;
  } catch (err) {
    return false;
  }
}

function* workGetHotelsFetch() {
  let info = yield select(getInfo);

  const hotels = yield call(hotelsFetch, info);

  if (hotels) {
    yield put({ type: GET_HOTELS_SUCCESS, hotels });
  } else {
    yield put({ type: GET_HOTELS_ERROR });
  }
}

function* getHotelsSaga() {
  yield takeEvery(GET_HOTELS_FETCH, workGetHotelsFetch);
}

export default getHotelsSaga;
