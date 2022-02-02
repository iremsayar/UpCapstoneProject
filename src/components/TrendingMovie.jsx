import React, { useState } from "react";
import { useQuery } from "react-query";
import { DivTitles, MovieSelect } from "../styledComponents";
import { DivImages } from "../styledComponents";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { theme } from "../reduxStore/theme";
import { goProfile } from "../reduxStore/goProfile";
import { fav } from "../reduxStore/fav";
import { addFav, removeFav } from "../reduxStore/fav";
import { addSave, removeSave } from "../reduxStore/save";
import { fetchTrendingMovie } from "../api";

function TrendingMovie() {
  const theme_info = useSelector((state) => state.theme);
  const go_profile = useSelector((state) => state.goProfile);
  const fav = useSelector((state) => state.fav);
  const save = useSelector((state) => state.save);
  const dispatch = useDispatch();

  const [type, setType] = useState("day");

  const Trending = useQuery(
    ["trending", type],
    () => fetchTrendingMovie(type),
    {
      retry: false,
    }
  );
  // console.log("Trending", Trending);
  const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="lg:mt-16 lg:mb-48">
      <MovieSelect
        className="outline-none"
        onChange={(e) => {
          setType(e.target.value);
          // // console.log("tending::::::", type);
        }}
      >
        <option value="day">Today</option>
        <option value="week">Last Week</option>
      </MovieSelect>

      <div
        className={`flex bg-black drop-shadow-2xl  w-full overflow-scroll lg:mr-8 ${
          theme_info === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        {Trending?.data?.data?.results?.map((data, index) => (
          <div
            key={index}
            className="card flex flex-col items-center justify-between mx-3"
          >
            <DivTitles
              className={`lg:text-xl text-base font-black lg:my-2  
    ${theme_info === "dark" ? "text-sky-50" : "text-indigo-900	"}
    `}
            >
              {data.original_title}
            </DivTitles>
            <Link to={`${data.id}`}>
              <DivImages className="border-double border-4 border-black rounded-2xl	drop-shadow-lg">
                <img
                  src={`${POSTER_BASE_URL}${data.poster_path}`}
                  alt=""
                  className="rounded-2xl"
                />
              </DivImages>
            </Link>
            <div className=" mt-2 w-full">
              {go_profile && (
                <div className="flex justify-between">
                  <div className="">
                    {fav.some((i) => i.title === data.title) ? (
                      <button onClick={() => dispatch(removeFav(data.title))}>
                        <FcLike className="w-10 h-10 " />
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(addFav(data.id, data.title))}
                      >
                        <FcLikePlaceholder className="w-10 h-10" />
                      </button>
                    )}
                  </div>
                  <div className="">
                    {save.some((i) => i.title === data.title) ? (
                      <button onClick={() => dispatch(removeSave(data.title))}>
                        <FcOk className="w-10 h-10 " />
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(addSave(data.id, data.title))}
                      >
                        <FcPlus className="w-10 h-10" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div
                className={` text-center text-xs  lg:my-3
      ${theme_info === "dark" ? "text-sky-100" : "text-cyan-900		"}`}
              >
                {data.release_date}
              </div>

              {/* <div
          className={`text-xs ${
            theme_info === "dark" ? "text-sky-300" : "text-blue-800	"
          } `}
        >
          Drama, comedy, love
        </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingMovie;
