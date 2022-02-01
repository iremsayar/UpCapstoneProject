const USER_INFO_LOCAL = "USER_INFO_LOCAL";

export const userInfoLocal = (value = {}) => ({
  type: USER_INFO_LOCAL,
  payload: value,
});

const userInfoLocalReducer = (value = {}, action) => {
  switch (action.type) {
    case USER_INFO_LOCAL:
      return { ...action.payload };
    default:
      return value;
  }
};

export default userInfoLocalReducer;
