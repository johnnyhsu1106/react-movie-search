import { useMovieSearchContext } from '../../context/MovieSearchContext';


const SearchResultsTitle = () => {
  const { 
    numOfResults
  } = useMovieSearchContext();

  if (numOfResults === null) {
    return null;
  }
  
  return (
    <>
      <h2> {numOfResults > 0 ? `Search Result${numOfResults > 1 ? 's': ''} ${numOfResults}` : 'No Result' } </h2>
    </>
  )
}

export default SearchResultsTitle;
