export const filterReducer = (state, action) => {
  switch (action.type) {
    case "ONLINE":
      return {
        ...state,
        rating: action.payload,
      };
    case "OFFLINE":
      return {
        ...state,
        sort: action.payload,
      };
    case "Empty":
      return {
        ...state,
      };
    default:
      return state;
  }
};
