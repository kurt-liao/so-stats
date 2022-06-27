const renderStatsCard = require("../src/cards/stats-card");
const { renderError } = require("../src/common/utils");
const fetchStats = require("../src/requests/stats-request");
require("dotenv").config();

module.exports = async (req, res) => {
  const { user_id, random, hide_title, hide_badges, hide_border, hide_logo } =
    req.query;
  const options = {
    random,
    hideTitle: hide_title,
    hideBadges: hide_badges,
    hideBorder: hide_border,
    hideLogo: hide_logo,
  };
  res.setHeader("Content-Type", "image/svg+xml");

  try {
    const stats = await fetchStats(user_id);
    res.send(renderStatsCard(stats, options));
  } catch (err) {
    return res.send(renderError(err.message));
  }
};
