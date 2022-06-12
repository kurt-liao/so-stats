const tinycolor = require("tinycolor2");

const isArray = (v) => {
  return v && v.constructor === Array;
};

const isArrayHasValue = (v) => {
  return isArray(v) && v.length > 0;
};

const getRandomTheme = () => {
  const randomColor = () => tinycolor.random();
  const bgColor = randomColor();
  const iconColor = randomColor();
  const titleColor = randomColor();
  const textColor = randomColor();
  const borderColor = randomColor();
  const badgeTextColor = randomColor();

  while (
    bgColor.toString() === titleColor.toString() ||
    bgColor.toString() === textColor.toString()
  ) {
    bgColor = randomColor();
  }

  if (bgColor.isDark()) {
    titleColor.getBrightness();
    textColor.getBrightness();
    iconColor.getBrightness();
  }

  return {
    bgColor,
    iconColor,
    titleColor,
    textColor,
    borderColor,
    badgeTextColor,
  };
};

const numFormatter = (num, digits) => {
  const map = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "m" },
    { value: 1e9, symbol: "g" },
    { value: 1e12, symbol: "t" },
    { value: 1e15, symbol: "p" },
    { value: 1e18, symbol: "e" },
  ];

  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = map
    .slice()
    .reverse()
    .find((item) => {
      return num >= item.value;
    });

  return item
    ? (num / item.value).toFixed(digits).replace(regex, "$1") + item.symbol
    : "0";
};

module.exports = {
  isArray,
  isArrayHasValue,
  getRandomTheme,
  numFormatter,
};
