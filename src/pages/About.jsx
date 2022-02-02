import React from "react";
import { useSelector } from "react-redux";
import { TextDiv } from "../styledComponents";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";

function About() {
  const theme_info = useSelector((state) => state.theme);

  return (
    <div
      className={`w-full min-h-screen ${
        theme_info === "dark"
          ? "bg-gradient-to-l from-stone-700 via-stone-900 to-black"
          : "bg-gradient-to-l from-purple-400 via-indiago-300 to-white "
      }`}
    >
      <TextDiv className="flex flex-col justify-center items-center lg:text-xl	">
        <p className="lg:mt-20 mt-12">Hello 👋 I am İrem.</p>
        <p className="text-center">
          I working as a Junior Frontend Developer. You have seen my capstone
          project in UP School.{" "}
        </p>
        <p className="text-center">
          I used React and these libraries and frameworks:
        </p>
        <div className="lg:text-sm text-xs text-center mb-5">
          <p>react-router-dom</p>
          <p>react-dom</p>
          <p>react-query</p>
          <p>axios</p>
          <p>redux</p>
          <p>react-redux</p>
          <p>redux-persist</p>
          <p>formik</p>
          <p>yup</p>
          <p>react-paginate</p>
          <p>styled-components</p>
          <p>Tailwind Css</p>
          <p>react-icons</p>
        </div>
        For any comments, please contact me here
      </TextDiv>
      <div className="flex justify-center my-7">
        <BsFillArrowDownCircleFill className="text-white animate-bounce w-12 h-12 " />
      </div>
      <div className="flex justify-center text-white">
        <a href="mailto:iremssayar@gmail.com" target="_blank" rel="noreferrer">
          <SiGmail className="w-12 h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/iremssayar/"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedin className="w-12 h-12 mx-6" />
        </a>
        <a href="https://github.com/iremsayar" target="_blank" rel="noreferrer">
          {" "}
          <SiGithub className="w-12 h-12" />{" "}
        </a>
      </div>
    </div>
  );
}

export default About;
