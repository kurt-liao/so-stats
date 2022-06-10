const Card = require("../common/Card");
const { getRandomTheme } = require("../common/utils");

const renderStatsCard = (
  stats = {},
  {
    random = false,
    bgColor = "#000",
    iconColor = "#fff",
    titleColor = "#e7f216",
    textColor = "#fff",
    badgeTextColor = "#fff",
    borderColor = "#fff",

    hideBorder = false,
    hideBadges = false,
    hideTitle = false,
  },
) => {
  const options = {
    bgColor,
    iconColor,
    titleColor,
    textColor,
    badgeTextColor,
    borderColor,

    hideBorder,
    hideBadges,
    hideTitle,
  };

  if (random) {
    const {
      bgColor,
      iconColor,
      titleColor,
      textColor,
      borderColor,
      badgeTextColor,
    } = getRandomTheme();

    options.bgColor = bgColor;
    options.iconColor = iconColor;
    options.titleColor = titleColor;
    options.textColor = textColor;
    options.borderColor = borderColor;
    options.badgeTextColor = badgeTextColor;
  }

  const { name, badges = {}, reputation, questionCount, answerCount } = stats;

  const renderBadges = (badges) => {
    return `
        <svg height="24" width="150" x="50%" y="-5">
          <rect width="150" height="24" stroke="hsl(45,100%,47%)" fill="hsl(48,100%,91%)" rx="6">    
          </rect>
          <text class="badge-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${
            badges.gold || 0
          }</text>
          <circle cx="10" cy="12" r="4" fill="hsl(45,100%,47%)" />
        </svg>
        <svg height="24" width="150" x="50%" y="25">
          <rect width="150" height="24" stroke="hsl(210, 3%, 61%)" fill="hsl(0, 0%, 91%)" rx="6">    
          </rect>
          <text class="badge-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${
            badges.silver || 0
          }</text>
          <circle cx="10" cy="12" r="4" fill="hsl(210, 3%, 61%)" />
        </svg>
        <svg height="24" width="150" x="50%" y="55">          
          <rect width="150" height="24" stroke="hsl(28, 31%, 52%)" fill="rgb(243, 234, 226)" rx="6">          
          </rect>
          <text class="badge-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${
            badges.bronze || 0
          }</text>
          <circle cx="10" cy="12" r="4" fill="hsl(28, 31%, 52%)" />
        </svg>`;
  };

  const renderStats = (reputation, questionCount, answerCount) => {
    return `
      <svg x="0" y="0">
        <g transform="translate(0, 0)">
          <text x="0" y="10" class="stat">Reputation : </text>
          <text x="130" y="10" class="stat">${reputation || 0}</text>
        </g>
        <g transform="translate(0, 60)">
          <text y="10" class="stat">Answer Count : </text>
          <text x="130" y="10" class="stat">${answerCount || 0}</text>
        </g>
        <g transform="translate(0, 30)">
          <text y="10" class="stat">Question Count : </text>
          <text x="130" y="10" class="stat">${questionCount || 0}</text>
        </g>
      </svg>`;
  };

  const card = new Card(
    {
      title: name + "'s Stack Overflow Stats",
    },
    options,
  );

  return card.render(
    `<g transform="translate(25, 60)">
      ${renderStats(reputation, questionCount, answerCount)}
      ${hideBadges ? null : renderBadges(badges)}
     </g>
    `,
  );
};

module.exports = renderStatsCard;
