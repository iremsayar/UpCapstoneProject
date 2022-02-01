import React from "react";
import { LoginSelect } from "../styledComponents";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { OutlineButton } from "../styledComponents";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "../reduxStore/userInfo";
import { goProfile } from "../reduxStore/goProfile";
import { theme } from "../reduxStore/theme";
import { BsFillXCircleFill } from "react-icons/bs";
import { BsEmojiDizzyFill } from "react-icons/bs";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const [loginUserName, setLoginUserName] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const state = useSelector((state) => state);
  const user_info = useSelector((state) => state.userInfoLocal);
  const theme_info = useSelector((state) => state.theme);
  const go_profile = useSelector((state) => state.goProfile);
  const dispatch = useDispatch();
  // console.log("go_profile:::::::::::", go_profile);

  // console.log("login loginUserName:", loginUserName);
  // console.log("login loginPassword:", loginPassword);

  return (
    <div>
      <div
        className={`flex lg:min-h-screen ${
          theme_info === "dark"
            ? "bg-gradient-to-t from-stone-700 to-black"
            : "bg-gradient-to-t from-blue-300 to-white"
        }`}
      >
        <div className="w-1/5 hidden md:block"></div>
        <div className="flex flex-col w-full md:w-3/5  mx-6 lg:mx-0">
          <div
            className={`text-4xl lg:text-[46px] font-bold text-center pb-8 mt-12 ${
              theme_info === "dark" ? "text-white" : "text-stone-600"
            }`}
          >
            Login your account
          </div>
          <div className="mb-6">
            <input
              name="username"
              type="text"
              className={`w-full text-[20px] lg:h-15 px-4 lg:py-4 py-3 rounded-lg ${
                theme_info === "dark" ? "bg-white" : "bg-blue-200	"
              }`}
              onChange={(e) => setLoginUserName(e.target.value)}
              placeholder="Username"
            />
          </div>

          <div className="mb-6">
            <input
              name="password"
              type="password"
              className={`w-full text-[20px] lg:h-15 px-4 lg:py-4 py-3 rounded-lg ${
                theme_info === "dark" ? "bg-white" : "bg-blue-200	"
              }`}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <OutlineButton onClick={() => setShow(true)} type="submit">
              Login
            </OutlineButton>
          </div>
        </div>
      </div>

      {show ? (
        <div className="fixed top-0 left-0 bg-black/25 w-full h-full 	">
          <div className=" flex flex-col w-2/5 h-2/5   bg-white inset-x-1/2 translate-y-3/4 translate-x-3/4 rounded-3xl">
            <div className="flex justify-end">
              <BsFillXCircleFill
                onClick={() => setShow(false)}
                className="w-8 h-8 m-4"
              />
            </div>
            <div className="">
              {user_info.username === undefined && (
                <div className="flex flex-col items-center">
                  <div className="lg:text-xl md:text-lg text-xs text-red-500 font-bold lg:m-4 lg:p-4 text-center">
                    You do not have an existing account, please sign in first.
                  </div>
                  <div className="">
                    <BsFillEmojiWinkFill className="w-20 h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40text-center text-amber-300 my-6" />
                  </div>
                </div>
              )}
              {user_info.username !== undefined &&
                (loginUserName !== user_info.username ||
                  loginPassword !== user_info.password) && (
                  <div className="flex flex-col items-center">
                    <div className="lg:text-xl md:text-lg text-xs text-red-500 font-bold lg:m-4 text-center ">
                      username or password entered incorrectly!
                    </div>
                    <div className="">
                      <BsEmojiDizzyFill className="w-20 h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40  text-center text-amber-300 my-6" />
                    </div>
                  </div>
                )}
              {loginPassword === user_info.password &&
                loginUserName === user_info.username && (
                  <div className="flex flex-col items-center">
                    <div className="text-red-900 font-bold text-center lg:text-xl md:text-lg text-xs">
                      WELCOME dear {loginUserName}!
                    </div>
                    <div className="">
                      <BsEmojiSunglassesFill className="w-20 h-20 lg:w-28 lg:h-28 xl:w-30 xl:h-30 text-center text-amber-300 lg:my-6 my-4" />
                    </div>

                    <button
                      onClick={() => {
                        dispatch(goProfile(true));
                      }}
                      className="lg:my-6 text-cyan-500	underline underline-offset-4 font-bold lg:m-0 lg:text-2xl md:text-lg text-xs"
                    >
                      <Link to="/profile">go to your profile</Link>
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Login;
