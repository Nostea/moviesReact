import "./MovieCard.css";
import StarRating from "../StarRating/StarRating";
import GenreArray from "./Genres/Genres";

const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <h3>{props.transferMovieItem.title}</h3>
      <p>{props.transferMovieItem.year}</p>
      <span>{props.transferMovieItem.director}</span>
      <p>{props.transferMovieItem.duration}</p>
      <GenreArray genres={props.transferMovieItem.genre} />
      <StarRating rating={props.transferMovieItem.rate} />
    </div>
  );
};

export default MovieCard;
