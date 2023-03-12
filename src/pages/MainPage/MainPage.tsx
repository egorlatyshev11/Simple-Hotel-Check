import React from "react";
import s from "./mainPage.module.scss";

import { Filter, Header, HotelSection, LikedSection } from "features";
import { HotelSectionMock } from "shared/mocks/mock_hotel_section";
import { LikedSectionMock } from "shared/mocks/mock_liked_section";

export const MainPage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.container}>
        <Filter />
        <div className={s.hotelSection}>
          <HotelSection />
        </div>
        <LikedSection />
      </div>
    </div>
  );
};
