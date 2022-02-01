const IS_SORT = "IS_SORT";

export const isSort = (isSort = false) => ({
  type: IS_SORT,
  payload: isSort,
});

const isSortReducer = (isSort = false, action) => {
  switch (action.type) {
    case IS_SORT:
      return action.payload;
    default:
      return isSort;
  }
};

export default isSortReducer;
