import React from "react";

import { Button, Card, Input } from "components";

import s from "./filter.module.scss";

const Filter = () => {
  return (
    <Card className={s.container}>
      <form className={s.form}>
        <Input value="Москва" onChange={() => {}} label="Локация" />
        <Input
          value={""}
          onChange={() => {}}
          type="date"
          label="Дата заселения"
        />
        <Input
          value="1"
          onChange={() => {}}
          type="number"
          label="Количество дней"
        />
      </form>
      <Button onClick={() => {}} title="Найти" />
    </Card>
  );
};

export default Filter;
