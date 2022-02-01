import React from "react";
import ChangeThemeButton from "../components/ChangeThemeButton";
import DiscoverMovie from "../components/DiscoverMovie";
import Search from "../components/Search";
import TrendingMovie from "../components/TrendingMovie";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchSearch } from "../api";
import { DivImages, DivTitles } from "../styledComponents";
import { FcPrevious } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { isSearch } from "../reduxStore/isSearch";
import { theme } from "../reduxStore/theme";
function Home() {
  const search_movie = useSelector((state) => state.searchMovie);
  const theme_info = useSelector((state) => state.theme);

  // // console.log("search_movie", search_movie);
  const is_search = useSelector((state) => state.isSearch);
  const perPage = 3;
  // const [pageCount, setPageCount] = useState(0);
  const [selectedPage, setSelectedPage] = useState();

  const SearchData = useQuery(
    ["SearchData", search_movie],
    () => fetchSearch(search_movie),
    {
      retry: false,
    }
  );
  const handlePageClick = (data) => {
    setSelectedPage(data.selected * perPage);
  };
  const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const dispatch = useDispatch();
  return (
    <div>
      <Search focus="focus" />
      {is_search ? (
        <div className="transition-all min-h-screen flex flex-col justify-around	">
          <div className="flex justify-end">
            <button onClick={() => dispatch(isSearch(false))}>
              <div className="flex justify-end">
                <FcPrevious className="md:w-12 md:h-12 w-8 h-8  mx-3" />
                <FcHome className="md:w-12 md:h-12 w-8 h-8  mx-3" />{" "}
              </div>
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly my-8">
            {SearchData?.data?.data?.results
              ?.slice(selectedPage, selectedPage + perPage)
              .map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`lg:text-lg text-base font-thin  w-3/5 h-20 text-center 
          ${theme_info === "dark" ? "text-sky-50" : "text-indigo-900	"}
          `}
                  >
                    {data.original_title}
                  </div>
                  <DivImages
                    id="focus"
                    className="border-double border-4 border-black rounded-2xl	drop-shadow-lg"
                  >
                    <img
                      src={`${POSTER_BASE_URL}${data.poster_path}`}
                      alt=""
                      className="rounded-2xl"
                    />
                  </DivImages>
                </div>
              ))}
          </div>
          <div className="scale-50 md:scale-100		">
            <ReactPaginate
              previousLabel={"↩"}
              nextLabel={"↪"}
              breakLabel={"..."}
              pageCount={10}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName="flex justify-center"
              pageClassName="mx-1 p-2 text-gray-700 font-thin text-lg border-2 border-indigo-600 hover:border-indigo-300 hover:bg-indigo-100 hover:font-bold "
              previousClassName="mx-1 p-2 text-gray-500 font-thin text-lg border-2 border-indigo-600 hover:border-indigo-300 hover:bg-indigo-100 hover:font-bold "
              nextClassName="mx-1 p-2 text-gray-500 font-thin text-lg border-2 border-indigo-600 hover:border-indigo-300 hover:bg-indigo-100 hover:font-bold "
              breakClassName="mx-1 p-2 text-gray-500	font-thin text-lg border-2 border-indigo-600 hover:border-indigo-300 hover:bg-indigo-100 hover:font-bold "
              activeClassName="border-indigo-300 bg-indigo-100 font-bold"
              forcePage={selectedPage / perPage}
            />
          </div>
        </div>
      ) : (
        <div>
          <DiscoverMovie />
          <TrendingMovie />
        </div>
      )}
    </div>
  );
}

export default Home;
