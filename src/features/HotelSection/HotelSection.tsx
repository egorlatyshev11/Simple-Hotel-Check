import React, { FC } from "react";

import { Card, Slider } from "components";
import { HotelCard } from "features";

import s from "./hotelSection.module.scss";

import { ReactComponent as Location } from "../../assets/icons/location.svg";

interface HotelSectionProps {
  country: string;
  date: string;
  likeAmount: number;
  hotels: any;
}

const HotelSection: FC<HotelSectionProps> = ({
  country,
  date,
  likeAmount,
  hotels,
}) => {
  return (
    <Card className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>
          <span>Отели</span>
          <Location />
          <span>{country}</span>
        </h2>
        <span className={s.date}>{date}</span>
      </div>
      <Slider />
      <div>
        <h3 className={s.liked}>
          Добавлено в Избранное:{" "}
          <span className={s.likeAmount}>{likeAmount}</span> отеля
        </h3>
        <div className={s.list}>
          {hotels.map((hotel: any, id: number) => {
            return <HotelCard {...hotel} key={id} />;
          })}
        </div>
      </div>
    </Card>
  );
};

export default HotelSection;
