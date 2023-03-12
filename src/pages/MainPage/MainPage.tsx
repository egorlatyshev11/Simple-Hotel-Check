import s from "./mainPage.module.scss";

import { Filter, Header, HotelSection, LikedSection } from "features";

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
