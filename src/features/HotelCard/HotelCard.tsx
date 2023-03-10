import React, { FC } from "react";

import s from "./hotelCard.module.scss";

import { ReactComponent as HotelIcon } from "../../assets/icons/hotel.svg";
import { ReactComponent as StarFill } from "../../assets/icons/starFill.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as LikeFill } from "../../assets/icons/likeFill.svg";

interface HotelCardProps {
  hotelName: string;
  stars: number;
  date: string;
  days: number;
  price: number;
  isLiked: boolean;
}

const HotelCard: FC<HotelCardProps> = ({
  hotelName,
  stars,
  date,
  days,
  price,
  isLiked,
}) => {
  return (
    <div className={s.container}>
      <div className={s.icon}>
        <HotelIcon />
      </div>
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
        <button className={s.like} onClick={() => {}}>
          {isLiked ? <LikeFill /> : <Like />}
        </button>
        <div className={s.price}>
          Price: <span className={s.priceAmount}>{price}₽</span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
