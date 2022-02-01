const SORT_DATE_FROM = "SORT_DATE_FROM";

export const sortDateFrom = (date = "") => ({
  type: SORT_DATE_FROM,
  payload: date,
});

const sortDateFromReducer = (date = "", action) => {
  switch (action.type) {
    case SORT_DATE_FROM:
      return action.payload;
    default:
      return date;
  }
};

export default sortDateFromReducer;
