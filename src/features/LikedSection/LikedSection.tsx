import { FC, useState, useEffect } from "react";
import cn from "classnames";

import { Card } from "components";
import { HotelCard } from "features";

import { useAppSelector } from "redux/hooks";
import { Hotel } from "shared/types/hotel";

import { ReactComponent as SelectDown } from "../../assets/icons/selectDown.svg";
import { ReactComponent as SelectUp } from "../../assets/icons/selectUp.svg";

import s from "./likedSection.module.scss";

const LikedSection: FC = () => {
  const [isRating, setIsRating] = useState(true);
  const [isPrice, setIsPrice] = useState(true);
  const [isButton, setIsButton] = useState(true);
  const favorites = useAppSelector((state) => state.favoriteReducer);
  const [hotels, setHotels] = useState<Hotel[]>();

  const sortedArr = hotels?.sort((a: Hotel, b: Hotel) => {
    if (isButton) {
      return !isRating ? a.stars - b.stars : b.stars - a.stars;
    } else {
      return !isPrice ? a.priceAvg - b.priceAvg : b.priceAvg - a.priceAvg;
    }
  });

  useEffect(() => {
    const arr = Object.entries(favorites);

    if (arr.length) {
      const res = arr.map((hotel: any) => {
        return {
          hotelId: hotel[0],
          ...hotel[1],
          isLiked: true,
        };
      });
      setHotels(res);
    }
  }, [favorites]);

  const handleRating = () => {
    if (isButton) {
      setIsRating((prev) => !prev);
    } else {
      setIsButton(true);
    }
  };

  const handlePrice = () => {
    if (!isButton) {
      setIsPrice((prev) => !prev);
    } else {
      setIsButton(false);
    }
  };

  return (
    <Card className={s.container}>
      <h3 className={s.title}>Избранное</h3>
      <div className={s.buttons}>
        <button
          onClick={handleRating}
          className={cn(s.button, isButton && s.buttonActive)}
        >
          Рейтинг {isRating ? <SelectUp /> : <SelectDown />}
        </button>
        <button
          onClick={handlePrice}
          className={cn(s.button, !isButton && s.buttonActive)}
        >
          Цена {isPrice ? <SelectUp /> : <SelectDown />}
        </button>
      </div>
      <div className={s.list}>
        {sortedArr?.map((hotel: any, id: number) => {
          return Object.keys(favorites).length === 0 ? null : (
            <HotelCard {...hotel} key={id} />
          );
        })}
      </div>
    </Card>
  );
};

export default LikedSection;
