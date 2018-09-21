const setTweetsAndUsers = (tweets, users) => {
  return {
    type: "SET_TWEETS_AND_USERS",
    payload: {
      tweets: tweets,
      users: users
    }
  };
}

module.exports = {
  setTweetsAndUsers
};
