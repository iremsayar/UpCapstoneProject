const ADD_SAVE = "ADD_SAVE";
const REMOVE_SAVE = "REMOVE_SAVE";

export const addSave = (id, title) => ({
  type: ADD_SAVE,
  payload: { id, title },
});

export const removeSave = (title) => ({
  type: REMOVE_SAVE,
  payload: title,
});

const saveReducer = (save = [], action) => {
  switch (action.type) {
    case ADD_SAVE:
      return [...save, action.payload];
    case REMOVE_SAVE:
      return save.filter((item) => item.title !== action.payload);
    default:
      return save;
  }
};

export default saveReducer;
