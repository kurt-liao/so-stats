const axios = require("axios").default;
const { isArray, isArrayHasValue } = require("../src/common/utils");
const renderStatsCard = require("../src/cards/stats-card");
require("dotenv").config();

// module.exports = async (req, res) => {
//   const { user_id } = req.query;
// };

function fetchUser(userId) {
  return axios({
    url: `https://api.stackexchange.com/2.3/users/${userId}?order=desc&sort=reputation&site=stackoverflow`,
    method: "get",
  });
}

module.exports = async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  try {
    const result = await fetchUser("10389571");

    res.send(result && result.data);
  } catch (err) {
    res.send(err);
  }
};
