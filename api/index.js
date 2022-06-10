const renderStatsCard = require("../src/cards/stats-card");
const fetchStats = require("../src/requests/stats-request");
require("dotenv").config();

module.exports = async (req, res) => {
  const { user_id } = req.query;

  res.setHeader("Content-Type", "image/svg+xml");

  try {
    const stats = await fetchStats(user_id);
    res.send(renderStatsCard(stats));
  } catch (err) {
    res.send(err);
  }
};
