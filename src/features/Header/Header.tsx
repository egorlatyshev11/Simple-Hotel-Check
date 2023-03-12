import { useNavigate } from "react-router";

import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";

import s from "./header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login");
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Simple Hotel Check</h1>
      <button onClick={handleSubmit} className={s.button}>
        <span className={s.buttonText}>Выйти</span> <LogoutIcon height={24} />
      </button>
    </div>
  );
};

export default Header;
