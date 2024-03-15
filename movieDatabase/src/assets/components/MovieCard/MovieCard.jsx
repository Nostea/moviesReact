import "./MovieCard.css";
import StarRating from "../StarRating/StarRating";
import GenreArray from "./Genres/Genres";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  // das props.tranferMovieItem(ist die Schleife in MovieList).genre(das ist im movies Array der key - value paar)
  return (
    <div className="movie-card">
      <h3>{props.transferMovieItem.title}</h3>
      <p>{props.transferMovieItem.year}</p>
      <span>{props.transferMovieItem.director}</span>
      <p>{props.transferMovieItem.duration}</p>
      <GenreArray genres={props.transferMovieItem.genre} />
      <StarRating rating={props.transferMovieItem.rate} />
      <Link to={`/detail/${props.transferMovieItem.title}`}>See more</Link>
    </div>
  );
};

export default MovieCard;
