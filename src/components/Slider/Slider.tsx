import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderMock } from "shared/mocks/mock_slider";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import s from "./slider.module.scss";

const Slider: FC = () => {
  return (
    <div className={s.container}>
      <Swiper spaceBetween={12} slidesPerView={3.3}>
        {SliderMock.images.map((image: any, id: number) => (
          <SwiperSlide key={id}>
            <img src={image}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
