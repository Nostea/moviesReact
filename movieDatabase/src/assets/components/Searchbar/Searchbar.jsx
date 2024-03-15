import { useState } from "react";
import "./Searchbar.css";

const SearchBar = () => {
  const [movieTitle, setMovieTitle] = useState("");
  return (
    <div>
      <input
        type="text"
        name="searchinput"
        id="searchinput"
        placeholder="Search movie title"
        onChange={(event) => setMovieTitle(event.target.value)}
        value={movieTitle}
      />
    </div>
  );
};

export default SearchBar;
