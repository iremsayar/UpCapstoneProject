import React from "react";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { FcNoIdea } from "react-icons/fc";
import { BsMoonStarsFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { theme } from "../reduxStore/theme";

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
            <FcNoIdea
              className={`${
                theme_info === "dark" ? "text-white" : "text-stone-600"
              } w-12 h-12 mx-4`}
            />
          </div>
        ) : (
          <div className="flex items-center">
            <FcIdea
              className={`${
                theme_info === "dark" ? "text-white" : "text-stone-600"
              } w-12 h-12 mx-4`}
            />
          </div>
        )}
      </button>
    </div>
  );
}

export default ChangeThemeButton;
