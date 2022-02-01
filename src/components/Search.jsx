import React, { useEffect } from "react";
import { SearchInput } from "../styledComponents/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../reduxStore/searchMovie";
import { isSearch } from "../reduxStore/isSearch";

import { FcSearch } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function Search(props) {
  const search_movie = useSelector((state) => state.searchMovie);
  const is_search = useSelector((state) => state.isSearch);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center lg:mt-8 lg:mb-12 my-4">
      <SearchInput
        placeholder="Search movie..."
        onChange={(e) => dispatch(searchMovie(e.target.value))}
      />
      <a href={`#${props.focus}`}>
        <button onClick={() => dispatch(isSearch(true))}>
          <FcSearch className="md:w-12 md:h-12 w-8 h-8  mx-3" />
        </button>
      </a>
    </div>
  );
}

export default Search;
