import React from "react";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { theme } from "../reduxStore/theme";
import { OutlineButton } from "../styledComponents";

function ChangeThemeButton() {
  const state = useSelector((state) => state);
  const theme_info = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  //dispatch(userInfo(values));

  return (
    <div>
      <button
        onClick={() =>
          theme_info === "dark"
            ? dispatch(theme("white"))
            : dispatch(theme("dark"))
        }
      >
        {theme_info === "dark" ? (
          <div className="flex items-center">
            <BsToggleOn
              className={`${
                theme_info === "dark" ? "text-white" : "text-stone-600"
              } w-16 h-16 mx-4`}
            />
            <BsMoonStarsFill className="text-cyan-600 w-9 h-9" />
          </div>
        ) : (
          <div className="flex items-center">
            <BsToggleOff
              className={`${
                theme_info === "dark" ? "text-white" : "text-stone-600"
              } w-16 h-16 mx-4`}
            />
            <FaSun className="text-yellow-300 w-9 h-9" />
          </div>
        )}
      </button>
    </div>
  );
}

export default ChangeThemeButton;
