import "./Genres.css";

const GenreArray = (props) => {
  return (
    <div className="genre-container">
      {props.genres.map((genreItem, index) => (
        <span key={index}>{genreItem}</span>
      ))}
    </div>
  );
};

export default GenreArray;
