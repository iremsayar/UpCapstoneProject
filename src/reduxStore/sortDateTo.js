const SORT_DATE_TO = "SORT_DATE_TO";

export const sortDateTo = (date = "") => ({
  type: SORT_DATE_TO,
  payload: date,
});

const sortDateToReducer = (date = "", action) => {
  switch (action.type) {
    case SORT_DATE_TO:
      return action.payload;
    default:
      return date;
  }
};

export default sortDateToReducer;
