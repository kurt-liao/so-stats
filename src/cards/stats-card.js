const Card = require("../common/Card");

const renderStatsCard = (stats = {}, options = { hide: [] }) => {
  const { name, badges = {}, reputation, questionCount, answerCount } = stats;

  const { title, colors, hideBorder = false, hideTitle = false } = options;

  const renderBadges = (badges) => {
    return `
        <svg height="24" width="150" x="50%" y="-5">
          <rect width="150" height="24" stroke="hsl(45,100%,47%)" fill="hsl(48,100%,91%)" rx="6">    
          </rect>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${
            badges.gold || 0
          }</text>
          <circle cx="10" cy="12" r="4" fill="hsl(45,100%,47%)" />
        </svg>
        <svg height="24" width="150" x="50%" y="25">
          <rect width="150" height="24" stroke="hsl(210, 3%, 61%)" fill="hsl(0, 0%, 91%)" rx="6">    
          </rect>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${
            badges.silver || 0
          }</text>
          <circle cx="10" cy="12" r="4" fill="hsl(210, 3%, 61%)" />
        </svg>
        <svg height="24" width="150" x="50%" y="55">          
          <rect width="150" height="24" stroke="hsl(28, 31%, 52%)" fill="rgb(243, 234, 226)" rx="6">          
          </rect>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${
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

  const card = new Card({
    title: name + "'s Stack Overflow Stats",
  });

  card.setHideBorder(hideBorder);
  card.setHideTitle(hideTitle);
  card.setCSS(null);

  return card.render(
    `<g transform="translate(25, 60)">
      ${renderStats(reputation, questionCount, answerCount)}
      ${renderBadges(badges)}
     </g>
    `,
  );
};

module.exports = renderStatsCard;
