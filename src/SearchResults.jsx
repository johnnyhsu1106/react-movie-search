import MovieList from './MovieList'

const SearchResults = ({
  movies,
  pageNumber, 
  numOfResults,
  numOfPages
}) => {
  return (
    <>
      <h2> {numOfResults > 0 ? `Search Result${numOfResults > 1 ? 's': ''} ${numOfResults}` : 'No Result' } </h2>
      { numOfResults !== 0 ? <p> {pageNumber} / {numOfPages} pages </p> : null } 
      
      <MovieList movies={movies} />
    </>
    
  )
}

export default SearchResults;