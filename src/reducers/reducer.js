const initialState = {
  users: [],
  tweets: []
};

function reducer(state=initialState, action) {
  switch(action.type) {
    case "SET_USERS":
      return {...state, users: action.payload};
    case "SET_TWEETS":
      return {...state, tweets: action.payload};
    default:
      return state;
  }
}

export default reducer;
