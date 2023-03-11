//@ts-nocheck
import React, { FC, useState } from "react";

import s from "./hotelCard.module.scss";

import { ReactComponent as HotelIcon } from "../../assets/icons/hotel.svg";
import { ReactComponent as StarFill } from "../../assets/icons/starFill.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as LikeFill } from "../../assets/icons/likeFill.svg";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  removeHotelFromFavorite,
  setHotelToFavorite,
} from "redux/reducers/favoriteReducer/favoriteActions";

interface HotelCardProps {
  hotelName: string;
  hotelId: number;
  stars: number;
  date: string;
  days: string;
  priceAvg: number;
  isLiked: boolean;
  isFull: boolean;
}

const HotelCard: FC<HotelCardProps> = ({
  hotelName,
  hotelId,
  stars,
  date,
  days,
  priceAvg,
  isLiked,
  isFull = false,
}) => {
  const [isFavorite, setIsFavorite] = useState(isLiked);

  const favorite = useAppSelector((state) => state.favoriteReducer);
  const dispatch = useAppDispatch();

  const handleLike = () => {
    setIsFavorite((prev) => !prev);

    if (!isFavorite) {
      dispatch(
        setHotelToFavorite({
          [hotelId]: {
            hotelName,
            date,
            days,
            priceAvg,
            stars,
            isLiked,
          },
        })
      );
    } else {
      dispatch(removeHotelFromFavorite(hotelId));
    }
  };

  const handleDislike = () => {};

  return (
    <div className={s.container}>
      {isFull && (
        <div className={s.icon}>
          <HotelIcon />
        </div>
      )}
      <div>
        <h3 className={s.name}>{hotelName}</h3>
        <div className={s.date}>
          <span>{date}</span> - <span>{days} день</span>
        </div>
        <div>
          {[...Array(5)].map((item: number, id: number) => {
            return id < stars ? <StarFill key={id} /> : <Star key={id} />;
          })}
        </div>
      </div>
      <div className={s.likeWrapper}>
        <button className={s.like} onClick={handleLike}>
          {isFavorite ? <LikeFill /> : <Like />}
        </button>
        <div className={s.price}>
          <span className={s.priveTag}>Price:</span>{" "}
          <span className={s.priceAmount}>{priceAvg}₽</span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
