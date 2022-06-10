const renderStatsCard = require("../src/cards/stats-card");

module.exports = (request, response) => {
  response.setHeader("Content-Type", "image/svg+xml");

  response.send(
    renderStatsCard(
      {
        name: "Test",
        badges: {
          bronze: 12555,
          silver: 355,
          gold: 22,
        },
        reputation: 128888,
        questionCount: 122,
        answerCount: 88888,
      },
      {},
    ),
  );
};
