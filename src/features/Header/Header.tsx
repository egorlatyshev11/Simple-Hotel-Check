import React from "react";

import s from "./header.module.scss";

import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";

const Header = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Simple Hotel Check</h1>
      <button onClick={() => {}} className={s.button}>
        <span className={s.buttonText}>Выйти</span> <LogoutIcon height={24} />
      </button>
    </div>
  );
};

export default Header;
