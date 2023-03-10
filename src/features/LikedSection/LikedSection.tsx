import React, { FC, useState } from "react";
import cn from "classnames";

import { Card } from "components";
import { HotelCard } from "features";

import s from "./likedSection.module.scss";

import { ReactComponent as Select } from "../../assets/icons/select.svg";
import { ReactComponent as SelectActive } from "../../assets/icons/selectActive.svg";

interface LikedSectionProps {
  likedHotels: any; // TODO
}

const LikedSection: FC<LikedSectionProps> = ({ likedHotels }) => {
  const [isRating, setIsRating] = useState(true);
  const [isPrice, setIsPrice] = useState(false);

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
        {likedHotels?.map((hotel: any, id: number) => {
          return <HotelCard {...hotel} key={id} />;
        })}
      </div>
    </Card>
  );
};

export default LikedSection;
