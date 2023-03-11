export const nameMonths = {
  "01": "января",
  "02": "февраля",
  "03": "марта",
  "04": "апреля",
  "05": "мая",
  "06": "июня",
  "07": "июля",
  "08": "августа",
  "09": "сентября",
  "10": "октября",
  "11": "ноября",
  "12": "декабря",
};

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
