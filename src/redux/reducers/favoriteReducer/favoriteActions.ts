export const ADD_HOTEL_TO_FAVORITE = "ADD_HOTEL_TO_FAVORITE";
export const REMOVE_HOTEL_FROM_FAVORITE = "REMOVE_HOTEL_FROM_FAVORITE";

export const setHotelToFavorite = (hotel: any) => ({
  type: ADD_HOTEL_TO_FAVORITE,
  payload: hotel,
});

export const removeHotelFromFavorite = (hotelId: number) => ({
  type: REMOVE_HOTEL_FROM_FAVORITE,
  payload: hotelId,
});
