import { useEffect, useState } from 'react'

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import NavButtons from './NavButtons';
import Loading from './Loading';
import Error from './Error';

import './App.css'

const API_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWY1MTY5YjBlZjE2OWYyMzJkYmRlYjZjOWUxYzRmYyIsInN1YiI6IjY0YmZlNmZjYjMzMTZiMDBlMmU5MjJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5SIhBQcKY8QnaI3OklqvLo6iq4m29saOvSqiy5FGihI';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [numOfResults, setNumOfResults] = useState(1);
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

      <NavButtons 
        pageNumber={pageNumber}
        numOfPages={numOfPages}
        onClickNavButton={handleButtonClick}
      />
    </div>
  )
}
export default App;
