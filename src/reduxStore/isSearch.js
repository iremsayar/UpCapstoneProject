const IS_SEARCH = "IS_SEARCH";

export const isSearch = (status = false) => ({
  type: IS_SEARCH,
  payload: status,
});

const isSearchReducer = (status = false, action) => {
  switch (action.type) {
    case IS_SEARCH:
      return action.payload;
    default:
      return status;
  }
};

export default isSearchReducer;
