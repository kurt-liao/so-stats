const renderStatsCard = require("../src/cards/stats-card");
const { renderError } = require("../src/common/utils");
const fetchStats = require("../src/requests/stats-request");
require("dotenv").config();

module.exports = async (req, res) => {
  const { user, random, hide = "" } = req.query;

  const _hide = hide.replace(/\s/g, "");
  const hideArr = _hide.split(",");

  const options = {
    random,
    hide: hideArr,
  };

  res.setHeader("Cache-Control", "public max-age=3600");
  res.setHeader("Content-Type", "image/svg+xml");

  try {
    const stats = await fetchStats(user);
    res.send(renderStatsCard(stats, options));
  } catch (err) {
    return res.send(renderError(err.message));
  }
};
