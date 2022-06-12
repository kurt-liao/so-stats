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
        @keyframes scaleInStat {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        @keyframes scaleInStatValue {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
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
      animation: fadeIn 1s ease-in forwards;
    }

    .stat {
      font-size: 14px;
      font-weight: 600;
      fill: ${textColor};
      font-family: 'Segoe UI', Ubuntu, Sans-Serif;
      animation: scaleInStat .3s ease-in forwards;
    }

    .stat-value {
      font-size: 14px;
      font-weight: 600;
      fill: ${textColor};
      font-family: 'Segoe UI', Ubuntu, Sans-Serif;
      animation: scaleInStatValue .5s ease-in forwards;
    }

    .badge-text {
      fill: ${badgeTextColor}
    }
  `;
};

module.exports = { getStyle, getAnimations };
