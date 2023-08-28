import { useState, useEffect, createContext, useContext } from 'react';


const API_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';
const API_TOKEN = import.meta.env.VITE_MOVIE_API_TOKEN; // import the api token from env.local
const MovieSearchContext = createContext({});

const useMovieSearchContext = () => {
  return useContext(MovieSearchContext);
};

const MovieSearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(null);
  const [numOfPages, setNumOfPages] = useState(0);
  const [numOfResults, setNumOfResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (pageNumber === null) {
      return;
    }

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

    }).finally(() => {
      setIsLoading(false);
    });

    return () => {
      controller.abort();
    }

  }, [query, pageNumber]);


  const handleSearchQuery = (query) => {
    setQuery(query);
    setPageNumber(1);
  };

  const handlePageNumClick = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  const handleButtonClick = (increment, lastPageNumber) => {
    setPageNumber((prevPageNumber) => {
      return prevPageNumber + increment === lastPageNumber ? lastPageNumber : prevPageNumber + increment;
    });
    window.scrollTo(0, 0);
  };

  const context = {
    query,
    movies,
    pageNumber, 
    numOfPages,
    numOfResults,
    isLoading,
    hasError,
    handleSearchQuery,
    handleButtonClick,
    handlePageNumClick
  };


  return (
    <MovieSearchContext.Provider value={context}>
      {children}
    </MovieSearchContext.Provider>
  )
}

export { useMovieSearchContext, MovieSearchProvider };