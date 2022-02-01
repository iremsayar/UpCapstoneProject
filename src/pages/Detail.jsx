import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCast, fetchMovies, fetchReview } from "../api";
import styled from "styled-components";
import { DivImages, DivTitles } from "../styledComponents";
function Detail() {
  const params = useParams();

  // // console.log("params::::", params.movieId);
  const movie_id = params.movieId;

  const MoviesData = useQuery(
    ["movies", movie_id],
    () => fetchMovies(movie_id),
    { retry: false }
  );
  const CastData = useQuery(["cast", movie_id], () => fetchCast(movie_id), {
    retry: false,
  });
  const ReviewsData = useQuery(
    ["reviews", movie_id],
    () => fetchReview(movie_id),
    {
      retry: false,
    }
  );
  // // console.log(
  //   "ReviewsData::::",
  //   ReviewsData?.data?.data?.results.map((item) => item.author_details)
  // );
  const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const Casts = CastData?.data?.data?.cast;
  const Authors = ReviewsData?.data?.data?.results.map(
    (item) => item.author_details
  );
  const Content = ReviewsData?.data?.data?.results.map((item) =>
    item.content.substring(0, 300)
  );
  const username = Authors?.find((x) => x !== undefined)?.username;
  const name = Authors?.find((x) => x !== undefined)?.name;
  const avatar = Authors?.find((x) => x !== undefined)?.avatar_path;
  // const [key, ...rest] = avatar?.split("/");
  // const value = rest?.join("/");
  const avatar_img = avatar?.slice(avatar?.indexOf("/") + 1);
  // console.log("Authors::::", Content);
  return (
    <div className="flex flex-col text-white mt-4 ">
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:mx-2 lg:mx-8 border-double md:border-8 border-white rounded-2xl	drop-shadow-lg">
          <img
            src={`${POSTER_BASE_URL}${MoviesData?.data?.data?.poster_path}`}
            alt=""
            className="rounded-2xl "
          />
        </div>
        <div className="flex flex-col md:w-1/2 mx-2">
          <div className="font-black xl:text-7xl lg:text-6xl md:text-3xl text-2xl text-center lg:mb-5 md:mb-3">
            {MoviesData?.data?.data?.original_title}
          </div>
          <div className="flex flex-col md:flex-row justify-between my-4">
            <div className="flex md:flex-col italic xl:text-xl lg:text-lg text-xs ">
              {MoviesData?.data?.data?.genres.map((item) => (
                <div>
                  {item.name}
                  <span className="md:hidden">◯</span>
                </div>
              ))}
            </div>
            <div className="mr-2 xl:text-xl lg:text-lg text-xs">
              {MoviesData?.data?.data?.release_date}
            </div>
          </div>
          <div className="mr-2 font-bold xl:text-2xl lg:text-xl">
            {MoviesData?.data?.data?.overview}
          </div>
        </div>
      </div>

      <div className="flex lg:mt-8 mt-4 overflow-scroll ">
        {Casts?.map((item, index) => (
          <div key={index} className="lg:mx-8 mx-4 bg-white  px-10 rounded-2xl">
            <DivTitles className="text-black text-center font-bold text-xl">
              {item.name}
            </DivTitles>
            <div className="">
              <DivImages>
                <img src={`${POSTER_BASE_URL}${item.profile_path}`} alt="" />
              </DivImages>
            </div>
            <DivTitles className="text-black font-black">
              <span className="text-orange-600">Character:</span>{" "}
              {item.character}
            </DivTitles>
          </div>
        ))}
      </div>

      <div className="flex flex-col  md:my-20 my-10 bg-gray-300	 m-1 md:m-8 rounded-2xl">
        <div className="flex justify-center lg:scale-150 lg:mt-4">
          <img
            src={avatar_img}
            alt=""
            className="rounded-full border-slate-400 border-2 mt-2"
          />
        </div>
        <div className="flex flex-col px-6">
          <div className="flex justify-between my-4">
            <div className="text-black font-black text-xs md:text-sm lg:text-base text-gray-400	 ">
              NAME:{name}
            </div>
            <div className="text-black font-black text-xs md:text-sm lg:text-base text-gray-400">
              USERNAME:{username}
            </div>
          </div>
          <div className="text-black lg:text-xl xl:text-2xl text-gray-600 mb-4">
            {Content}...
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Detail;
