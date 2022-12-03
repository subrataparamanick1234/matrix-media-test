const initialState = {
  usersData: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS": {
      return {
        ...state,
        usersData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
