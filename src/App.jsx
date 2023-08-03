import { useEffect, useState } from 'react'

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Pagination from './Pagination';
import Loading from './Loading';
import Error from './Error';

import './App.css'

const API_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';
const API_TOKEN = import.meta.env.VITE_MOVIE_API_TOKEN; // import the api token from env.local

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [numOfResults, setNumOfResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    const controller = new AbortController();
    const options  = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      },
      signal: controller.signal
    };
    fetch(`${API_ENDPOINT}?query=${query}&page=${pageNumber}`, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Invalid HTTPS Request');
      }
      return res.json();

    }).then((data) => {
      const { results, total_results, total_pages } = data;
      
      setIsLoading(false);
      setNumOfResults(total_results);
      setNumOfPages(total_pages);

      setMovies(results.map((result) => { return result }));

    }).catch((err) => {
      if (err.name === 'AbortError') {
        return;
      }
      setIsLoading(false);
      setHasError(true);
      console.error(err);
    });
    return () => {
      controller.abort();
    }
  }, [query, pageNumber]);


  const handleSearchQuery = (query) => {
    setQuery(query);
    setPageNumber(1);
  };

  const handleButtonClick = (increment, lastPageNumber) => {
    setPageNumber((prevPageNumber) => {
      return prevPageNumber + increment === lastPageNumber ? lastPageNumber : prevPageNumber + increment;
    });
  }


  return (
    <div className='container'>
      <SearchBar
        onSearchQuery={handleSearchQuery}
      />

      <SearchResults
        movies={movies}
        pageNumber={pageNumber}
        numOfPages={numOfPages}
        numOfResults={numOfResults} 
      />

      <Loading isLoading={isLoading} />
      <Error hasError={hasError} />

      <Pagination 
        pageNumber={pageNumber}
        numOfPages={numOfPages}
        onClickNavButton={handleButtonClick}
      />
    </div>
  )
}
export default App;
