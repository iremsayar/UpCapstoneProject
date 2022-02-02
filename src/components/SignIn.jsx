import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { OutlineButton } from "../styledComponents";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "../reduxStore/userInfo";
import { userInfoLocal } from "../reduxStore/userInfoLocal";
import { theme } from "../reduxStore/theme";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TextDiv } from "../styledComponents";
import { BsFillXCircleFill } from "react-icons/bs";
import { MdOutlineDoneOutline } from "react-icons/md";

const Schema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
});
function SignIn() {
  let navigate = useNavigate();
  // // console.log("navigate::::", navigate);
  // // console.log("location::::", location);
  function handleChange() {
    navigate("login");
  }

  const theme_info = useSelector((state) => state.theme);
  const user_info = useSelector((state) => state.userInfo);
  const [show, setShow] = useState(false);
  // // console.log(user_info);
  const dispatch = useDispatch();
  // // console.log(state);
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptTerms: false,
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          dispatch(userInfo(values));
          dispatch(userInfoLocal(values));
        }}
      >
        {({ resetForm }) => (
          <Form>
            <div
              className={`flex lg:min-h-screen  ${
                theme_info === "dark"
                  ? "bg-gradient-to-t from-stone-700 to-black"
                  : "bg-gradient-to-t from-blue-300	 to-white"
              }`}
            >
              <div className="w-1/5 hidden md:block"></div>
              <div className="flex flex-col w-full md:w-3/5  mx-6 lg:mx-0">
                <div
                  className={`text-4xl lg:text-[46px] font-bold lg:text-center pb-8 mt-12 ${
                    theme_info === "dark" ? "text-white" : "text-stone-600"
                  }`}
                >
                  Create your account
                </div>
                <div className="mb-6">
                  <Field
                    name="username"
                    type="text"
                    className={`w-full text-[20px] lg:h-15 px-4 lg:py-4 py-3 rounded-lg ${
                      theme_info === "dark" ? "bg-white" : "bg-blue-200	"
                    }`}
                    placeholder="Username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500	md:font-bold font-thin "
                  />
                </div>
                <div className="mb-6">
                  <Field
                    name="email"
                    type="email"
                    className={`w-full text-[20px] lg:h-15 px-4 lg:py-4 py-3 rounded-lg ${
                      theme_info === "dark" ? "bg-white" : "bg-blue-200	"
                    }`}
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500	md:font-bold font-thin "
                  />
                </div>
                <div className="mb-6">
                  <Field
                    name="password"
                    type="password"
                    className={`w-full text-[20px] lg:h-15 px-4 lg:py-4 py-3 rounded-lg ${
                      theme_info === "dark" ? "bg-white" : "bg-blue-200	"
                    }`}
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500	md:font-bold font-thin "
                  />
                </div>
                <div className="mb-6">
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={`w-full text-[20px] lg:h-15 px-4 lg:py-4 py-3 rounded-lg ${
                      theme_info === "dark" ? "bg-white" : "bg-blue-200	"
                    }`}
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500	md:font-bold font-thin "
                  />
                </div>
                <div className="mb-6">
                  <Field name="acceptTerms" type="checkbox" className="mr-3" />
                  <label
                    htmlFor="acceptTerms"
                    className={`md:text-2xl text-base font-black cursor-pointer ${
                      theme_info === "dark" ? "text-white" : "text-stone-600"
                    }`}
                  >
                    I have read and agree to the Terms
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="div"
                    className="text-red-500	md:font-bold font-thin "
                  />
                </div>
                <div className="flex justify-center">
                  <OutlineButton onClick={() => setShow(true)} type="submit">
                    Sign in
                  </OutlineButton>
                </div>
                <TextDiv className=" text-3xl text-center my-6 lg:my-20">
                  ...or login{" "}
                  <Link to="/login">
                    <span className="font-black underline text-sky-400		">
                      here{" "}
                    </span>
                  </Link>
                </TextDiv>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      {show && user_info.acceptTerms && (
        <div className="fixed top-0 left-0 bg-black/25 w-full h-full 	">
          <div className="flex flex-col w-2/5 h-2/5   bg-white inset-x-1/2 translate-y-3/4 translate-x-3/4 rounded-3xl">
            <div className="flex justify-end">
              <BsFillXCircleFill
                onClick={() => setShow(false)}
                className="w-8 h-8 m-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="lg:text-xl md:text-lg text-xs text-green-600 font-bold  text-center">
                Sign in successful.
                <Link to="/login">
                  <div className="lg:my-6 my-3 text-cyan-500	underline underline-offset-4 font-bold lg:m-0 lg:text-2xl md:text-lg text-xs">
                    Login
                  </div>
                </Link>
              </div>
              <div className="">
                <MdOutlineDoneOutline className="w-20 h-20 lg:w-28 lg:h-28 xl:w-30 xl:h-30 text-center text-green-400	animate-bounce lg:my-6 my-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
