import React, { useEffect } from "react";
import { LoginSelect, MovieSelect, Nav } from "../styledComponents";
import { Link, useLocation, useHistory, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { goProfile } from "../reduxStore/goProfile";
import { userInfo } from "../reduxStore/userInfo";
import ChangeThemeButton from "./ChangeThemeButton";
import { ItemLink } from "../styledComponents";
import { FcFilmReel } from "react-icons/fc";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react/cjs/react.development";

function NavBar() {
  let navigate = useNavigate();
  const [mobileNav, setMobileNav] = useState(false);

  const go_profile = useSelector((state) => state.goProfile);
  const theme_info = useSelector((state) => state.theme);
  const user_info = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();
  function handleChange(value) {
    navigate(`${value}`);

    value = "";
  }

  return (
    <>
      <Nav>
        <div className="flex items-center lg:mx-4 ">
          <Link to="/">
            <FcFilmReel className="lg:w-12 lg:h-12" />
          </Link>
          <Link to="/">
            <div
              className={`
            ${
              theme_info === "white"
                ? "bg-gradient-to-r from-indigo-600 via-purple-500 to-white"
                : "bg-gradient-to-r from-indigo-600 via-red to-black"
            }
             flex font-thin lg:my-8 lg:text-5xl text-white`}
            >
              movico
            </div>
          </Link>
        </div>
        <div className="hidden lg:contents">
          <div className="flex items-center ">
            <MovieSelect
              className="outline-none"
              onChange={(event) => handleChange(event.target.value)}
            >
              <option value="/">Movies</option>
              <option value="popular-movie">Popular</option>
              <option value="top-rated-movie">Top Rated</option>
            </MovieSelect>
          </div>
          <div className="flex w-full items-center justify-end">
            <ItemLink to="/">Home</ItemLink>
            {go_profile && <ItemLink to="profile">Profile</ItemLink>}
            <LoginSelect
              className="outline-none"
              onChange={(event) => handleChange(event.target.value)}
              onClick={(e) => {
                console.log(e.target.value);
                e.target.value === "/" && dispatch(goProfile(false));
                e.target.value === "/" && dispatch(userInfo({}));
              }}
            >
              {go_profile ? (
                <option value="/">Sign out</option>
              ) : (
                <option value="login">Login</option>
              )}
              {!go_profile && <option value="sign-in">Sing in</option>}
            </LoginSelect>
            <div className="ml-6 mr-16">
              <ChangeThemeButton />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-end lg:hidden">
          <div
            className={` ${
              theme_info === "dark" ? "text-white" : "text-black"
            }`}
          >
            <VscThreeBars
              onClick={() => setMobileNav(!mobileNav)}
              className="md:w-12 md:h-12 mx-4"
            />
          </div>
        </div>
      </Nav>
      <div className="lg:hidden">
        {mobileNav && (
          <div className="flex flex-col w-full min-h-screen items-center ">
            <div className="flex my-8">
              <MovieSelect
                className="outline-none"
                onChange={(event) => handleChange(event.target.value)}
              >
                <option value="/">Movies</option>
                <option value="popular-movie">Popular</option>
                <option value="top-rated-movie">Top Rated</option>
              </MovieSelect>
            </div>
            <div className="flex flex-col w-full items-center justify-end">
              <ItemLink to="/">Home</ItemLink>
              {go_profile && <ItemLink to="profile">Profile</ItemLink>}
              <LoginSelect
                className="outline-none"
                onChange={(event) => handleChange(event.target.value)}
                onClick={(e) => {
                  console.log(e.target.value);
                  e.target.value === "/" && dispatch(goProfile(false));
                  e.target.value === "/" && dispatch(userInfo({}));
                }}
              >
                {go_profile ? (
                  <option value="/">Sign out</option>
                ) : (
                  <option value="login">Login</option>
                )}
                {!go_profile && <option value="sign-in">Sing in</option>}
              </LoginSelect>
              <div className="ml-6 mr-16">
                <ChangeThemeButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
