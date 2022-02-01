const SORT_CHOOSE = "SORT_CHOOSE";

export const sortChoose = (choose = "") => ({
  type: SORT_CHOOSE,
  payload: choose,
});

const sortChooseReducer = (choose = "", action) => {
  switch (action.type) {
    case SORT_CHOOSE:
      return action.payload;
    default:
      return choose;
  }
};

export default sortChooseReducer;
