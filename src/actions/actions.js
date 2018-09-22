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

const setCurrentTweet = (tweet) => {
  return {
    type: "SET_CURRENT_TWEET",
    payload: tweet
  };
}

const removeCurrentTweet = () => {
  return {
    type: "REMOVE_CURRENT_TWEET",
    payload: null
  };
}

const updateTweets = (tweets) => {
  return {
    type: "UPDATE_TWEETS",
    payload: tweets
  };
}

module.exports = {
  setTweetsAndUsers,
  updateSearchTerm,
  setCurrentTweet,
  removeCurrentTweet,
  updateTweets
};
