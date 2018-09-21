const initialState = {
  users: [],
  tweets: []
};

function reducer(state=initialState, action) {
  console.log(action.payload)
  switch(action.type) {
    case "SET_TWEETS_AND_USERS":
      return {...state, tweets: action.payload.tweets, users: action.payload.users};
    default:
      return state;
  }
}

export default reducer;
