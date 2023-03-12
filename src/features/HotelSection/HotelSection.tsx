import { FC } from "react";

import { Card, Slider } from "components";
import { HotelCard } from "features";
import { useAppSelector } from "redux/hooks";

import { Hotel } from "shared/types/hotel";

import { ReactComponent as Location } from "../../assets/icons/location.svg";

import s from "./hotelSection.module.scss";

const HotelSection: FC = () => {
  const hotels = useAppSelector((state) => state.getHotels.hotels);
  const error = useAppSelector((state) => state.getHotels.isError);
  const loading = useAppSelector((state) => state.getHotels.isLoading);
  const info = useAppSelector((state) => state.getInfo);
  const favorites = useAppSelector((state) => state.favoriteReducer);
  const favoriteAmount = Object.entries(favorites).length;

  return (
    <Card className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>
          <span>Отели</span>
          <Location />
          <span>{hotels[0]?.location.name}</span>
        </h2>
        <span className={s.date}>{info.date}</span>
      </div>
      <Slider />
      <div className={s.list}>
        <h3 className={s.liked}>
          Добавлено в Избранное:{" "}
          <span className={s.likeAmount}>{favoriteAmount}</span> отеля
        </h3>
        {!loading ? (
          <div>
            {" "}
            {!error ? (
              <div>
                {hotels.map((hotel: Hotel, id: number) => {
                  return (
                    <HotelCard
                      {...hotel}
                      key={id}
                      isFull={true}
                      date={info.date}
                      days={info.days}
                      isLiked={false}
                    />
                  );
                })}
              </div>
            ) : (
              <span className={s.error}>something went wrong</span>
            )}
          </div>
        ) : (
          <span className={s.error}>Loading...</span>
        )}
      </div>
    </Card>
  );
};

export default HotelSection;
