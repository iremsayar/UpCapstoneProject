const THEME = "THEME";

export const theme = (color = "white") => ({
  type: THEME,
  payload: color,
});

const themeReducer = (color = "white", action) => {
  switch (action.type) {
    case THEME:
      return action.payload;
    default:
      return color;
  }
};

export default themeReducer;
