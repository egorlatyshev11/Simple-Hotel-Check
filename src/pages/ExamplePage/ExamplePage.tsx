//@ts-nocheck
import React, { useState } from "react";

import s from "./examplePage.module.scss";

import { Button, Card, Input, Slider } from "components";
import { Filter, Header, HotelCard, Login } from "features";
import { SliderMock } from "shared/mocks/mock_slider";
import { HotelCardMock } from "shared/mocks/mock_hotel_card";

export const ExamplePage = () => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className={s.container}>
      <div className={s.inputContainer}>
        <Input
          label={"Локация"}
          value={input}
          onChange={handleChange}
          className={s.input}
          autoFocus={true}
        />
      </div>

      <div>
        <Button className={s.button} title={"Войти"} />
      </div>

      <div className={s.cardContainer}>
        <Card className={s.card}>
          <Input
            label={"Локация"}
            value={input}
            onChange={handleChange}
            className={s.input}
            autoFocus={true}
          />
          <Input
            label={"Локация"}
            value={input}
            onChange={handleChange}
            className={s.input}
            autoFocus={true}
          />
          <Input
            label={"Локация"}
            value={input}
            onChange={handleChange}
            className={s.input}
            autoFocus={true}
          />
        </Card>
      </div>

      <div>
        <Login />
      </div>

      <div>
        <Header />
      </div>

      <div>
        <Filter />
      </div>

      <div>
        <Slider images={SliderMock.images} />
      </div>

      <div>
        <HotelCard {...HotelCardMock} />
      </div>
    </div>
  );
};
