export const nameMonths = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июлю",
  "Августа",
  "Сентября",
  "октября",
  "Ноября",
  "Декабря",
];

export const getNewDate = (date: string, number: any) => {
  const theDate = new Date(date);

  const result = new Date(theDate.getTime() + number * 24 * 60 * 60 * 1000);

  return `${result.getFullYear()}-${(result.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${result.getDate()}`;
};

export const getCurrentDate = (date: any) => {
  return `${new Date(date).getFullYear()}-${(new Date(date).getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${new Date(date).getDate()}`;
};

export const currentDate = getCurrentDate(new Date());

export const readDate = (date: string) => {
  const year = date.split("").slice(0, 4).join("");

  const month = date.split("").slice(5, 7).join("");

  const day = date.split("").slice(8, 10).join("");

  return `${day} ${nameMonths[+month - 1]} ${year}`;
};
