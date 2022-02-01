const GO_PROFILE = "GO_PROFILE";

export const goProfile = (status = false) => ({
  type: GO_PROFILE,
  payload: status,
});

const goProfileReducer = (status = false, action) => {
  switch (action.type) {
    case GO_PROFILE:
      return action.payload;
    default:
      return status;
  }
};

export default goProfileReducer;
