//@ts-nocheck

export const GET_HOTELS_FETCH = "GET_HOTELS_FETCH";
export const GET_HOTELS_SUCCESS = "GET_HOTELS_SUCCESS";
export const GET_HOTELS_ERROR = "GET_HOTELS_ERROR";

export const getHotelsFetch = () => ({
  type: GET_HOTELS_FETCH,
});

export const getHotelsError = () => ({
  type: GET_HOTELS_ERROR,
});
