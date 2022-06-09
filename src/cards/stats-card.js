const Card = require("../common/Card");

const renderStatsCard = (stats = {}, options = { hide: [] }) => {
  const { name, badges = {} } = stats;

  const { title, colors, hideBorder = false, hideTitle = false } = options;

  const card = new Card({});

  card.setHideBorder(hideBorder);
  card.setHideTitle(hideTitle);
  card.setCSS(null);

  return card.render();
};

module.exports = renderStatsCard;
