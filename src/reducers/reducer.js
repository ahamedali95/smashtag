const initialState = {
  users: [],
  tweets: [],
  searchTerm: "",
  currentTweet: null
};

function reducer(state=initialState, action) {
  console.log(action.payload)
  switch(action.type) {
    case "SET_TWEETS_AND_USERS":
      return {...state, tweets: action.payload.tweets, users: action.payload.users};
    case "UPDATE_SEARCH_TERM":
      return {...state, searchTerm: action.payload};
    case "SET_CURRENT_TWEET":
      return {...state, currentTweet: action.payload};
    case "REMOVE_CURRENT_TWEET":
      return {...state, currentTweet: action.payload};
    default:
      return state;
  }
}

export default reducer;
