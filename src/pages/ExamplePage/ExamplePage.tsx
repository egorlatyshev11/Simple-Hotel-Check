//@ts-nocheck
import React, { useState } from "react";

import s from "./examplePage.module.scss";

import { Input } from "components";

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
    </div>
  );
};
