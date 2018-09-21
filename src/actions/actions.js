const setUsers = (users) => {
  return {type: "SET_USERS", payload: users};
}

const setTweets = (tweets) => {
  return {type: "SET_TWEETS", payload: tweets};
}

module.exports = {
  setUsers,
  setTweets
};
