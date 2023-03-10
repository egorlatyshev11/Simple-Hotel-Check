export const isEmailValid = (email: string): boolean => {
  return /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const isPasswordValid = (password: string): boolean => {
  return /^[0-9a-zA-Z]+$/gi.test(password);
};
