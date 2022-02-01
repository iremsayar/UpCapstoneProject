import React, { useEffect } from "react";
import {
  DateInput,
  FilterButton,
  MovieSelect,
  OutlineButton,
} from "../styledComponents";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from "react-redux";
import { sortGenre } from "../reduxStore/sortGenre";
import { sortChoose } from "../reduxStore/sortChoose";
import { sortDateFrom } from "../reduxStore/sortDateFrom";
import { sortDateTo } from "../reduxStore/sortDateTo";
import { isSort } from "../reduxStore/isSort";

function SortFilterMovie() {
  const sort_genre = useSelector((state) => state.sortGenre);
  const sort_choose = useSelector((state) => state.sortChoose);
  const sort_date_from = useSelector((state) => state.sortDateFrom);
  const sort_date_to = useSelector((state) => state.sortDateTo);
  const is_sort = useSelector((state) => state.isSort);
  const theme_info = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  // console.log("sort_date_to:::::.", is_sort);

  const genres = [
    {
      genre: "Action",
      id: "28",
    },
    {
      genre: "Adventure",
      id: "12",
    },
    {
      genre: "Comedy",
      id: "35",
    },
    {
      genre: "Romance",
      id: "10749",
    },
    {
      genre: "Drama",
      id: "18",
    },
    {
      genre: "Crime",
      id: "80",
    },
  ];
  return (
    <div>
      <div className="flex flex-col  mt-12">
        <div className="flex flex-col items-center">
          <div
            className={`lg:text-5xl mb-8 font-thin
                 ${theme_info === "dark" ? "text-sky-50" : "text-indigo-900	"}
          `}
          >
            Sort By
          </div>
          <div className="drop-shadow-lg	">
            <MovieSelect
              onChange={(e) => {
                dispatch(sortChoose(e.target.value));
              }}
            >
              <option
                value="0"
                className={`${
                  theme_info === "dark" ? "text-sky-50" : "text-indigo-900"
                } `}
              >
                Sort by...
              </option>
              <option value="original_title.asc">Sort from A to Z</option>
              <option value="original_title.desc">Sort from Z to A</option>
              <option value="popularity.inc">Increasing by popularity</option>
              <option value="popularity.desc">Decreasing by popularity</option>
              <option value="release_date.asc">
                Increasing by release data
              </option>
              <option value="release_date.desc">
                Decreasing by release data
              </option>
            </MovieSelect>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`lg:text-5xl mb-4 font-thin mt-8
                 ${theme_info === "dark" ? "text-sky-50" : "text-indigo-900	"}
          `}
          >
            Filter By
          </div>
          <div className="flex flex-col items-end">
            <div
              className={`lg:my-8 mb-4 lg:text-xl font-medium drop-shadow-lg
             ${theme_info === "dark" ? "text-sky-50" : "text-indigo-900	"}`}
            >
              From:{" "}
              <DateInput
                name="from"
                type="text"
                placeholder="year-month-day"
                onChange={(e) => {
                  dispatch(sortDateFrom(e.target.value));
                }}
              />
            </div>
            <div
              className={`lg:text-xl mb-4 font-medium drop-shadow-lg	
             ${theme_info === "dark" ? "text-sky-50" : "text-indigo-900	"}`}
            >
              To:{" "}
              <DateInput
                name="to"
                type="text"
                placeholder="year-month-day"
                onChange={(e) => {
                  dispatch(sortDateTo(e.target.value));
                }}
              />
            </div>
          </div>
          <div className="flex flex-col lg:my-8 lg:text-lg xl:text-xl">
            <div className="flex w-1/2 drop-shadow-lg	">
              {genres.slice(0, 3).map((item, index) => (
                <FilterButton
                  key={index}
                  onClick={() => dispatch(sortGenre(item.id))}
                >
                  {item.genre}
                </FilterButton>
              ))}
            </div>
            <div className="flex drop-shadow-lg	">
              {genres.slice(3, 6).map((item, index) => (
                <FilterButton
                  key={index}
                  onClick={() => dispatch(sortGenre(item.id))}
                >
                  {item.genre}
                </FilterButton>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center drop-shadow-lg	my-6">
          <OutlineButton onClick={() => dispatch(isSort(true))}>
            SEARCH
          </OutlineButton>
        </div>
      </div>
    </div>
  );
}

export default SortFilterMovie;
