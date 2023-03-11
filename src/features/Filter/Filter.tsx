import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { Button, Card, Input } from "components";

import s from "./filter.module.scss";

import { changeInfoValue } from "redux/reducers/getInfoReducer/getInfoActions";
import { getHotelsFetch } from "redux/reducers/getHotelsReducer/getHotelsActions";
import { currentDate, getCurrentDate } from "shared/helpers/date";

interface HotelsInfo {
  location: string;
  date: string;
  days: string;
}

const Filter = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm<HotelsInfo>({ mode: "onSubmit" });

  const handleInput = (data: HotelsInfo) => {
    dispatch(changeInfoValue(data));
    dispatch(getHotelsFetch());
  };

  useEffect(() => {
    dispatch(getHotelsFetch());
  }, []);

  return (
    <Card className={s.container}>
      <form className={s.form}>
        <Controller
          control={control}
          name="location"
          defaultValue={"Москва"}
          render={({ field: { onChange, value } }) => (
            <Input value={value} onChange={onChange} label="Локация" />
          )}
        />

        <Controller
          control={control}
          name="date"
          defaultValue={currentDate}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              type="date"
              label="Дата заселения"
            />
          )}
        />

        <Controller
          control={control}
          name="days"
          defaultValue={"1"}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              type="text"
              label="Количество дней"
            />
          )}
        />
      </form>
      <Button onClick={handleSubmit(handleInput)} title="Найти" />
    </Card>
  );
};

export default Filter;
