import { useMovieSearchContext } from '../../context/MovieSearchContext';
import MovieList from './MovieList'
import SearchResultsTitle from './SearchResultsTitle';
import Loading from '../Loading';
import Error from '../Error';

const SearchResults = () => {
  const {
    isLoading,
    hasError
  } = useMovieSearchContext();

  if (isLoading) {
    return <Loading />;
  } 
  
  if (hasError) {
    return <Error />
  }

  return (
    <>
      <SearchResultsTitle />
      <MovieList />
    </>
    
  )
}

export default SearchResults;