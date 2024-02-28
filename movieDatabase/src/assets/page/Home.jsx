import "./Home.css";
import MovieList from "../components/Movielist/MovieList";

const Home = () => {
  return (
    <main>
      <section className="content">
        <h1>Movies For you</h1>
        <MovieList />
      </section>
    </main>
  );
};

export default Home;
