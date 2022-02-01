const USER_INFO = "USER_INFO";

export const userInfo = (value = {}) => ({
  type: USER_INFO,
  payload: value,
});

const userInfoReducer = (value = {}, action) => {
  switch (action.type) {
    case USER_INFO:
      return { ...action.payload };
    default:
      return value;
  }
};

export default userInfoReducer;
