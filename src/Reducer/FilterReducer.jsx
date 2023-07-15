export const filterReducer = (state, action) => {
  switch (action.type) {
    case "Set_filter":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
