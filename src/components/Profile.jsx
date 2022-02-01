import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { theme } from "../reduxStore/theme";
import { fav } from "../reduxStore/fav";
import { addFav, removeFav } from "../reduxStore/fav";
import { addSave, removeSave } from "../reduxStore/save";
import { userInfo } from "../reduxStore/userInfo";
import img from "./images.jpeg";
import { MovieSelect } from "../styledComponents";
import { FcLike } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { MdChangeCircle } from "react-icons/md";
import { TextDiv } from "../styledComponents";
function Profile() {
  const user_info = useSelector((state) => state.userInfoLocal);
  const theme_info = useSelector((state) => state.theme);
  const fav = useSelector((state) => state.fav);
  const save = useSelector((state) => state.save);
  const dispatch = useDispatch();

  const [show, setShow] = useState("");
  return (
    <div className="w-full lg:flex min-h-screen">
      <div className="flex flex-col items-center lg:w-1/4 m-8">
        <div className="">
          <img src={img} alt="" />
        </div>
        <TextDiv className="my-2">{user_info.username}</TextDiv>
        <TextDiv className="my-2">{user_info.email}</TextDiv>
        <TextDiv className="my-2 flex  items-baseline">
          <MdChangeCircle className="w-8 h-8 relative top-3 mx-2" /> Change
          password
        </TextDiv>
      </div>
      <div className="lg:w-3/4 m-8 ">
        <div className="flex flex-col items-center lg:items-end lg:mr-28">
          <MovieSelect
            className="outline-none"
            onChange={(e) => setShow(e.target.value)}
          >
            <option value="save">Movie List</option>
            <option value="fav">Favorite Movies</option>
          </MovieSelect>
        </div>
        <div class=" grid overflow-hidden grid-cols-3 grid-rows-1 gap-2 mt-12 lg:mx-2">
          <div class="box font-bold text-stone-500	lg:text-2xl md:text-xl text-lg">
            MOVIE ID
          </div>
          <div class="box font-bold text-stone-500	lg:text-2xl md:text-xl text-lg">
            MOVIE NAME
          </div>
          <div class="box font-bold text-stone-500	lg:text-2xl md:text-xl text-lg ">
            ACTIONS
          </div>
        </div>
        <hr className="lg:mr-40 mt-2 font-black" />
        {show === "fav"
          ? fav.map((item, index) => (
              <div key={index} className="">
                <div class="items-baseline	grid overflow-hidden grid-cols-3 grid-rows-1 gap-2 lg:m-4 ">
                  <TextDiv class="box font-thin		">{item.id}</TextDiv>
                  <TextDiv class="box font-thin	">{item.title}</TextDiv>

                  <TextDiv class="box font-thin	">
                    {" "}
                    <button onClick={() => dispatch(removeFav(item.title))}>
                      <FcLike className="w-10 h-10 hover:w-11 hover:h-12 mx-4" />
                    </button>
                  </TextDiv>
                </div>
                <hr className="lg:mr-40" />
              </div>
            ))
          : save.map((item, index) => (
              <div key={index} className="">
                <div class="items-baseline	 grid overflow-hidden grid-cols-3 grid-rows-1 gap-2 lg:m-4 ">
                  <TextDiv class="box font-thin		">{item.id}</TextDiv>
                  <TextDiv class="box font-thin	">{item.title}</TextDiv>
                  <TextDiv class="box font-thin	">
                    {" "}
                    <button onClick={() => dispatch(removeSave(item.title))}>
                      <FcOk className="w-10 h-10 hover:w-11 hover:h-12 mx-4 " />
                    </button>
                  </TextDiv>
                </div>
                <hr className="lg:mr-40" />
              </div>
            ))}
      </div>
    </div>
  );
}

export default Profile;
