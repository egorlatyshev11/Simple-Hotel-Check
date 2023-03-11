import React, { FC } from "react";

import { Card, Slider } from "components";
import { HotelCard } from "features";

import s from "./hotelSection.module.scss";

import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const HotelSection: FC = () => {
  const hotels = useAppSelector((state) => state.getHotels.hotels);
  const info = useAppSelector((state) => state.getInfo);

  console.log(hotels);

  return (
    <Card className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>
          <span>Отели</span>
          <Location />
          {/* <span>{hotels[0].location.name}</span> */}
        </h2>
        <span className={s.date}>{info.date}</span>
      </div>
      <Slider />
      <div>
        <h3 className={s.liked}>
          Добавлено в Избранное:{" "}
          {/* <span className={s.likeAmount}>{likeAmount}</span> отеля */}
        </h3>
        <div className={s.list}>
          {hotels.map((hotel: any, id: number) => {
            return (
              <HotelCard
                {...hotel}
                key={id}
                isFull={true}
                date={info.date}
                days={info.days}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default HotelSection;
