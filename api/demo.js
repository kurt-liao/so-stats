const renderStatsCard = require("../src/cards/stats-card");

module.exports = (req, res) => {
  const { random, hide_title, hide_badges, hide_border, hide_logo } = req.query;
  const options = {
    random,
    hideTitle: hide_title,
    hideBadges: hide_badges,
    hideBorder: hide_border,
    hideLogo: hide_logo,
  };

  res.setHeader("Content-Type", "image/svg+xml");

  res.send(
    renderStatsCard(
      {
        name: "So-Stats",
        badges: {
          bronze: 12555,
          silver: 355,
          gold: 22,
        },
        reputation: 128888,
        questionCount: 122,
        answerCount: 88888,
      },
      options,
    ),
  );
};
