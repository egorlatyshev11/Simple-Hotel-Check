import React, { FC, useState, useEffect } from "react";
import cn from "classnames";
import { useAppSelector } from "redux/hooks";

import { Card } from "components";
import { HotelCard } from "features";

import s from "./likedSection.module.scss";

import { ReactComponent as Select } from "../../assets/icons/select.svg";
import { ReactComponent as SelectActive } from "../../assets/icons/selectActive.svg";

const LikedSection: FC = () => {
  const [isRating, setIsRating] = useState(true);
  const [isPrice, setIsPrice] = useState(false);
  const favorites = useAppSelector((state) => state.favoriteReducer);
  // const [hotels, setHotels] = useState<any>();

  // useEffect(() => {
  //   const arr = Object.entries(favorites);

  //   if (arr.length) {
  //     const res = arr.map((hotel: any) => {
  //       return {
  //         hotelId: hotel[0],
  //         ...hotel[1],
  //         isLiked: true,
  //         stars: hotel[1].stars,
  //       };
  //     });
  //     setHotels(res);
  //   }
  // }, [favorites]);

  const handleSelect = () => {
    setIsRating((prev) => !prev);
    setIsPrice((prev) => !prev);
  };

  return (
    <Card className={s.container}>
      <h3 className={s.title}>Избранное</h3>
      <div className={s.buttons}>
        <button
          onClick={handleSelect}
          className={cn(s.button, isRating && s.buttonActive)}
        >
          Рейтинг {isRating ? <SelectActive /> : <Select />}
        </button>
        <button
          onClick={handleSelect}
          className={cn(s.button, isPrice && s.buttonActive)}
        >
          Цена {isPrice ? <SelectActive /> : <Select />}
        </button>
      </div>
      <div className={s.list}>
        {favorites?.map((hotel: any, id: number) => {
          return <HotelCard {...hotel} key={id} hotelId={id} />;
        })}
      </div>
    </Card>
  );
};

export default LikedSection;
