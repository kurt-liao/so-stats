const axios = require("axios").default;

function fetchUser(userId) {
  axios({
    url: `https://api.stackexchange.com/2.3/users/${userId}?order=desc&sort=reputation&site=stackoverflow`,
    method: "get",
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchUser(100297);
