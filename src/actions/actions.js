const setTweetsAndUsers = (tweets, users) => {
  return {
    type: "SET_TWEETS_AND_USERS",
    payload: {
      tweets: tweets,
      users: users
    }
  };
}

const updateSearchTerm = (searchTerm) => {
  return {
    type: "UPDATE_SEARCH_TERM",
    payload: searchTerm
  };
}

module.exports = {
  setTweetsAndUsers,
  updateSearchTerm
};
