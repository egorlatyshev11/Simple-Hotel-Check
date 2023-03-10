import { Login } from "features";
import React from "react";
import s from "./loginPage.module.scss";

export const LoginPage = () => {
  return (
    <div className={s.container}>
      <div className={s.login}>
        <Login />
      </div>
    </div>
  );
};
