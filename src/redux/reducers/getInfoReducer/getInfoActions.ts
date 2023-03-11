// @ts-nocheck

export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";

export const changeInfoValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  payload: value,
});
