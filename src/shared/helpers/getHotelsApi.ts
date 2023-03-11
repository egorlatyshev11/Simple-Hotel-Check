// const api = "https://engine.hotellook.com/api/v2/cache.json?location=";
import axios from "axios";
import { getNewDate } from "shared/helpers/date";

export const getHotelsApi = async (info: any) => {
  const newDate = getNewDate(info.date, info.days);

  return await axios(
    `https://engine.hotellook.com/api/v2/cache.json?location=${info.location}&currency=rub&checkIn=${info.date}&checkOut=${newDate}&limit=10`
  );
};
