import { Login } from "features";
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
