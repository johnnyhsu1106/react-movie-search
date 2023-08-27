import { useMovieSearchContext } from '../../context/MovieSearchContext';


const SearchResultsTitle = () => {
  const { 
    pageNumber,
    numOfPages,
    numOfResults
  } = useMovieSearchContext();
  
  return (
    <>
      <h2> {numOfResults > 0 ? `Search Result${numOfResults > 1 ? 's': ''} ${numOfResults}` : 'No Result' } </h2>
      { numOfResults !== 0 ? <p> {pageNumber} / {numOfPages} pages </p> : null } 
    </>
  )
}

export default SearchResultsTitle;
