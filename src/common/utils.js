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
  }

  return {
    bgColor,
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

const encodeHTML = (str) => {
  return str
    .replace(/[\u00A0-\u9999<>&](?!#)/gim, (i) => {
      return "&#" + i.charCodeAt(0) + ";";
    })
    .replace(/\u0008/gim, "");
};

const renderError = (message) => {
  return `
    <svg width="450" height="120" viewBox="0 0 450 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
    @keyframes fade {
      from {
        opacity: 1;
      }
      50% {
        opacity: .4;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes neon {
      0%,
      100% {
        text-shadow: 0 0 20px #fff, 0 0 100px #fff, 0 0 20px #fff;
      }
      50% {
        text-shadow: 0 0 50px #fff, 0 0 150px #fff, 0 0 50px #fff;
        color: lightblue;
      }
    }

    .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #CAC2C2;}
    .animate { animation: fade 1s infinite; }
    .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #EF3A3A; }
    </style>
    <rect x="0.5" y="0.5" width="449" height="99%" rx="4.5" fill="#000" stroke="#E4E2E2"/>
    <text x="20" y="45" class="text animate">Something went wrong!</text>
    <text x="20" y="65" class="text animate">Open an issue at https://github.com/kurt-liao/so-stats</text>
    <text data-testid="message" x="25" y="75" class="text small">
      <tspan x="20" dy="18">${encodeHTML(message)}</tspan>
    </text>
    </svg>
  `;
};

class ParamMissingError extends Error {
  constructor(missedParams, secondaryMsg) {
    const msg = `Missing parameter ${missedParams
      .map((param) => `"${param}"`)
      .join(", ")}, make sure you have pass the parameters`;
    super(msg);
    this.missedParams = missedParams;
    this.secondaryMsg = secondaryMsg;
  }
}

module.exports = {
  isArray,
  isArrayHasValue,
  getRandomTheme,
  numFormatter,
  renderError,
  ParamMissingError,
};
