export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      // returning actual posts
      return action.payload;
    // case LIKE:
    //   return state.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    // case CREATE:
    //   return [...state, action.payload];
    // case UPDATE:
    //   return state.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    // case DELETE:
    //   return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};
