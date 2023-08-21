import MovieList from './MovieList'
import SearchResultsTitle from './SearchResultsTitle';

const SearchResults = ({
  movies,
  pageNumber, 
  numOfResults,
  numOfPages
}) => {
  return (
    <>
      <SearchResultsTitle
        pageNumber={pageNumber}
        numOfResults={numOfResults}
        numOfPages={numOfPages}
      />
      <MovieList movies={movies} />
    </>
    
  )
}

export default SearchResults;