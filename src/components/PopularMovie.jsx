import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchPopularMovie } from "../api";
import { DivImages, DivTitles, OutlineButton } from "../styledComponents";
import useWindowSize from "../hooks/useWindowSize";
import { useSelector, useDispatch } from "react-redux";
import { theme } from "../reduxStore/theme";
import SortFilterMovie from "./SortFilterMovie";
import { isSort } from "../reduxStore/isSort";
import { fetchSort } from "../api";
function PopularMovie() {
  const { width } = useWindowSize();
  const theme_info = useSelector((state) => state.theme);
  const sort_genre = useSelector((state) => state.sortGenre);
  const sort_choose = useSelector((state) => state.sortChoose);
  const sort_date_from = useSelector((state) => state.sortDateFrom);
  const sort_date_to = useSelector((state) => state.sortDateTo);
  const is_sort = useSelector((state) => state.isSort);

  // // console.log("window width=>", width);

  const [visible, setVisible] = useState(4);

  const SortData = useQuery(
    ["SortData", sort_date_to, sort_date_from, sort_genre, sort_choose],
    () => fetchSort(sort_date_to, sort_date_from, sort_genre, sort_choose),
    {
      retry: false,
    }
  );

  // console.log("SortData:::::", SortData);
  const { isLoading, error, data } = useQuery(
    "popularMovie",
    fetchPopularMovie,
    { retry: false }
  );
  if (isLoading) return "Yükleniyor...";

  if (error) return "Hata meydana geldi: " + error.message;
  // // console.log("PopularMovie", data);
  const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="lg:w-1/2 ">
        {is_sort === true &&
        (sort_genre === "0" ||
          sort_choose === "" ||
          sort_date_to === "" ||
          sort_date_from === "") ? (
          <div className="text-center">
            Please fill in all the information and click the search button...
          </div>
        ) : (
          ""
        )}

        <SortFilterMovie />
      </div>
      <div
        className={`lg:w-1/2 flex xl:justify-evenly lg:justify-around justify-center  drop-shadow-2xl w-full flex-wrap	${
          theme_info === "dark"
            ? "bg-gradient-to-l from-stone-500 to-black"
            : "bg-gradient-to-l from-purple-500 to-indiago-300 "
        }`}
      >
        {is_sort === true &&
        sort_genre !== "0" &&
        sort_choose !== "" &&
        sort_date_to !== "" &&
        sort_date_from !== ""
          ? SortData?.data?.data?.results
              ?.slice(0, visible)
              .map((data, index) => (
                <div
                  key={index}
                  className=" card flex flex-col items-center mx-3"
                >
                  <div
                    className={`flex items-end lg:text-lg justify-center text-base font-thin w-3/5 h-20 text-center 
                    ${theme_info === "dark" ? "text-sky-50" : "text-indigo-900	"}
                    `}
                  >
                    {data.original_title}
                  </div>
                  <Link to={`${data.id}`}>
                    <DivImages className="border-double border-4 border-black rounded-2xl	drop-shadow-lg">
                      <img
                        src={`${POSTER_BASE_URL}${data.poster_path}`}
                        alt=""
                        className="rounded-2xl"
                      />
                    </DivImages>
                  </Link>
                  <div className=""></div>
                </div>
              ))
          : data?.data?.results?.slice(0, visible).map((data, index) => (
              <div
                key={index}
                className=" card flex flex-col items-center mx-4 lg:mx-0"
              >
                <div
                  className={`flex items-end lg:text-lg justify-center text-base font-thin w-3/5 h-20 text-center 
                       ${
                         theme_info === "dark"
                           ? "text-sky-50"
                           : "text-indigo-900	"
                       }
                       `}
                >
                  {data.original_title}
                </div>
                <Link to={`${data.id}`}>
                  <DivImages className="border-double border-4 border-black rounded-2xl	drop-shadow-lg ">
                    <img
                      src={`${POSTER_BASE_URL}${data.poster_path}`}
                      alt=""
                      className="rounded-2xl"
                    />
                  </DivImages>
                </Link>
                <div className=""></div>
              </div>
            ))}

        <div className="lg:my-12 my-8">
          <OutlineButton onClick={() => setVisible((prev) => prev + 4)}>
            Load More
          </OutlineButton>
        </div>
      </div>
    </div>
  );
}

export default PopularMovie;
