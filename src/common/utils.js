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

  if (bgColor.isDark()) {
    titleColor.getBrightness();
    textColor.getBrightness();
    iconColor.getBrightness();
  } else {
    titleColor.darken();
    textColor.darken();
    iconColor.darken();
  }
  const result = {
    bgColor,
    iconColor,
    titleColor,
    textColor,
    borderColor,
    badgeTextColor,
  };
  console.log(result);

  return {
    bgColor,
    iconColor,
    titleColor,
    textColor,
    borderColor,
    badgeTextColor,
  };
};

module.exports = {
  isArray,
  isArrayHasValue,
  getRandomTheme,
};
