import Movie from './Movie'
import { useMovieSearchContext } from '../../context/MovieSearchContext';
import style from './SearchResults.module.css';

const MovieList = () => {
  const { movies } = useMovieSearchContext();
  // Sort movies based on popularity
  movies.sort((movie1, movie2) => {
    return movie2.popularity - movie1.popularity;
  });
  
  return (
    <div className={style['movie-list']}>
      {movies.map((movie) => {
        const { id } = movie;
          return <Movie key={id} movie={movie} />
        })}
    </div>
  )
}

export default MovieList;