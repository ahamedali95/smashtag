const initialState = {
  users: [],
  tweets: [],
  searchTerm: ""
};

function reducer(state=initialState, action) {
  console.log(action.payload)
  switch(action.type) {
    case "SET_TWEETS_AND_USERS":
      return {...state, tweets: action.payload.tweets, users: action.payload.users};
    case "UPDATE_SEARCH_TERM":
      return {...state, searchTerm: action.payload};
    default:
      return state;
  }
}

export default reducer;
