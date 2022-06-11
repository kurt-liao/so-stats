const Card = require("../common/Card");
const { getRandomTheme, numFormatter } = require("../common/utils");
const { getStyle } = require("../common/styles");

const renderStatsCard = (
  stats = {},
  {
    random = false,
    bgColor = "#000",
    iconColor = "#fff",
    titleColor = "#e7f216",
    textColor = "#fff",
    badgeTextColor = "#000",
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

    badges.gold = numFormatter(badges?.gold, 1);
    badges.silver = numFormatter(badges?.silver, 1);
    badges.bronze = numFormatter(badges?.bronze, 1);

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
    
    reputation = numFormatter(reputation, 1);
    questionCount = numFormatter(questionCount, 1);
    answerCount = numFormatter(answerCount, 1);
    
    return `
      <svg x="0" y="0">
        <g transform="translate(0, 0)">
          <text x="-100" y="10" class="stat">Reputation : </text>
          <text x="-100" y="10" class="stat-value">${reputation || 0}</text>
        </g>
        <g transform="translate(0, 60)">
          <text x="-100" y="10" class="stat">Answer Count : </text>
          <text x="-100" y="10" class="stat-value">${answerCount || 0}</text>
        </g>
        <g transform="translate(0, 30)">
          <text x="-100" y="10" class="stat">Question Count : </text>
          <text x="-100" y="10" class="stat-value">${questionCount || 0}</text>
        </g>
      </svg>`;
  };

  const css = getStyle(options);

  const card = new Card(
    {
      title: name + "'s Stack Overflow Stats",
    },
    options,
  );

  card.setStyle(css);

  return card.render(
    `<g transform="translate(25, 60)">
      ${renderStats(reputation, questionCount, answerCount)}
      ${hideBadges ? null : renderBadges(badges)}
     </g>
    `,
  );
};

module.exports = renderStatsCard;
