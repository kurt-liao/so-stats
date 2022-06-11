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
            transform: translat(0px, 0px) scale(0);
          }
          to {
            transform: translate(100px, 0px) scale(1);
          }
        }
        @keyframes scaleInStatValue {
          from {
            transform: translat(0px, 0px) scale(0);
          }
          to {
            transform: translate(230px, 0px) scale(1);
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
      animation-delay: .3s;
    }

    .badge-text {
      fill: ${badgeTextColor}
    }
  `;
};

module.exports = { getStyle, getAnimations };
