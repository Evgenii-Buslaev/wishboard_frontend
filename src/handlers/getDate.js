const months = [
  "янв.",
  "февр.",
  "мар.",
  "апр.",
  "мая",
  "июня",
  "июля",
  "авг.",
  "сент.",
  "окт.",
  "нояб.",
  "дек.",
];

export const getDate = (date) => {
  const formattedDate = new Date(Date.parse(date));
  return `${formattedDate.getDate()}-ого ${
    months[formattedDate.getMonth()]
  } ${formattedDate.getFullYear()}`;
};
