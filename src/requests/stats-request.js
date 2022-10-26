const axios = require('axios')
const { isArrayHasValue, ParamMissingError } = require('../common/utils')

const fetchUser = (userId) => {
  return axios({
    url: `https://api.stackexchange.com/2.3/users/${userId}?order=desc&sort=reputation&site=stackoverflow`,
    method: 'get',
  })
}

const fetchAccountAssociated = (accountId) => {
  return axios({
    url: `https://api.stackexchange.com/2.3/users/${accountId}/associated`,
    method: 'get',
  })
}

const fetchStats = async (userId) => {
  if (!userId)
    throw new ParamMissingError(['user'])

  const stats = {
    badges: {
      bronze: 0,
      silver: 0,
      gold: 0,
    },
    name: '',
    reputation: 0,
    questionCount: 0,
    answerCount: 0,
  }

  try {
    const userRes = await fetchUser(userId)

    if (userRes?.data?.items[0]) {
      const user = userRes.data.items[0]
      stats.name = user.display_name
      stats.reputation = user.reputation
      stats.badges = user.badge_counts

      if (!user.account_id) {
        throw new Error(
          'User not found, make sure you provide correct user id',
        )
      }

      const accountRes = await fetchAccountAssociated(user.account_id)
      if (accountRes.data && isArrayHasValue(accountRes.data.items)) {
        for (let i = 0; i < accountRes.data.items.length; i++) {
          const item = accountRes.data.items[i]
          if (item.site_name === 'Stack Overflow') {
            stats.questionCount = item.question_count
            stats.answerCount = item.answer_count
          }
        }
      }
    }
    else {
      throw new Error('Could not fetch account associated')
    }

    return stats
  }
  catch (err) {
    if (err.response && err.response.data) {
      const { error_id, error_message } = err.response.data

      if (error_id === 400 && error_message === 'ids')
        throw new Error(`Could not fetch user by id ${userId}`)

      throw new Error('Fetch to user error')
    }
  }
}

module.exports = fetchStats
