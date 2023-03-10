import React, { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import s from "./slider.module.scss";

interface SliderProps {
  images: string[];
}

const Slider: FC<SliderProps> = ({ images }) => {
  return (
    <div className={s.container}>
      <Swiper spaceBetween={12} slidesPerView={3.3}>
        {images.map((image: any, id: number) => (
          <SwiperSlide key={id}>
            <img src={image}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
