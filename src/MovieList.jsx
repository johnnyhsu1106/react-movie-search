import Movie from './Movie'

const MovieList = ( { movies}) => {
  // Sort movies based on popularity
  movies.sort((movie1, movie2) => {
    return movie2.popularity - movie1.popularity;
  });
  return (
    <div>
      { movies.map((movie) => {
          const { id } = movie;
          return <Movie key={id} movie={movie} />
        })}
    </div>
  )
}

export default MovieList;