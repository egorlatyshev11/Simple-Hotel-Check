import React, { FC } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import cn from "classnames";

import { useNavigate } from "react-router-dom";

import s from "./login.module.scss";
import { Card, Input, Button } from "components";

import { isEmailValid, isPasswordValid } from "shared/helpers/validate";
import { User } from "shared/types/user";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<User>({ mode: "onSubmit" });

  const registerOptions = {
    email: {
      required: "Требуется почта",
      validate: (value: string) =>
        isEmailValid(value) || "Введите валидную почту",
    },
    password: {
      minLength: 8,
      required: "Требуется пароль",
      validate: (value: string) =>
        isPasswordValid(value) || "Введите валидный пароль",
    },
  };

  const onSubmit = (data: User) => {
    console.log(data);
    reset();
  };

  return (
    <Card className={s.container}>
      <h1 className={s.title}>Simple Hotel Check</h1>
      <form className={s.form}>
        <div className={s.inputs}>
          <div>
            <Controller
              control={control}
              name="email"
              rules={registerOptions.email}
              defaultValue={""}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  className={cn(s.input, errors.email && s.errorInput)}
                  label="Логин"
                  labelClassName={cn(s.label, errors.email && s.errorLabel)}
                />
              )}
            />
            {errors.email ? (
              <span className={s.error}>{errors.email.message}</span>
            ) : null}
          </div>

          <div>
            <Controller
              control={control}
              name="password"
              rules={registerOptions.password}
              defaultValue={""}
              render={({ field: { onChange, value } }) => (
                <Input
                  type="password"
                  value={value}
                  onChange={onChange}
                  className={cn(s.input, errors.password && s.errorInput)}
                  label="Пароль"
                  labelClassName={cn(s.label, errors.password && s.errorLabel)}
                />
              )}
            />
            {errors.password ? (
              <span className={s.error}>{errors.password.message}</span>
            ) : null}
          </div>
        </div>
        <Button onClick={handleSubmit(onSubmit)} title="Войти" />
      </form>
    </Card>
  );
};

export default Login;
