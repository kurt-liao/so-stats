const getAnimations = () => {
  return `
      @keyframes fadeIn {
          from {
              opacity: 0;
          }
          to {
              opacity: 1;
          }
      }
    `;
};

const getStyle = ({ titleColor, textColor, iconColor, badgeTextColor }) => {
  return `
    .title {
      font-size: 18px;
      font-weight: 600;
      fill: ${titleColor};
      font-family: 'Segoe UI', Ubuntu, Sans-Serif;
      animation: fadeIn .3s ease-in forwards;
    }

    .stat {
      font-size: 14px;
      font-weight: 600;
      fill: ${textColor};
      font-family: 'Segoe UI', Ubuntu, Sans-Serif;
      animation: fadeIn .3s ease-in forwards;
    }

    .stat-value {
      font-size: 14px;
      font-weight: 600;
      fill: ${textColor};
      font-family: 'Segoe UI', Ubuntu, Sans-Serif;
      animation: fadeIn .5s ease-in forwards;
    }

    .badge-text {
      fill: ${badgeTextColor}
    }
  `;
};

module.exports = { getStyle, getAnimations };
