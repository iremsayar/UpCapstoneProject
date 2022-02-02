import React from "react";
import { FooterDiv } from "../styledComponents";
import { SiGmail } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcFilmReel } from "react-icons/fc";

function Footer() {
  const theme_info = useSelector((state) => state.theme);

  return (
    <FooterDiv>
      <div className="flex items-center  justify-evenly w-full text-stone-500">
        <div className="">
          <div className="flex items-center lg:mx-4 ">
            <Link to="/">
              <FcFilmReel className="lg:w-6 lg:h-6" />
            </Link>
            <Link to="/">
              <div
                className={`
            ${
              theme_info === "white"
                ? "bg-gradient-to-r from-indigo-600 via-purple-500 to-white"
                : "bg-gradient-to-r from-indigo-600 via-red to-black"
            }
             flex font-thin lg:my-8 lg:text-xl text-white`}
              >
                movico
              </div>
            </Link>
          </div>
        </div>
        <div className="flex  ">
          <a
            href="mailto:iremssayar@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail className="lg:w-12 lg:h-12 w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/iremssayar/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin className="lg:w-12 lg:h-12 w-6 h-6 mx-6" />
          </a>
          <a
            href="https://github.com/iremsayar"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <SiGithub className="lg:w-12 lg:h-12 w-6 h-6" />{" "}
          </a>
        </div>
        <div className="">
          <a
            href="https://developers.themoviedb.org/3/getting-started/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API
          </a>
        </div>
      </div>
    </FooterDiv>
  );
}

export default Footer;
