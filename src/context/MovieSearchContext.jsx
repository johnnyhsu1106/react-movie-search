import { useState, useEffect, createContext, useContext } from 'react';

const API_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';
const API_TOKEN = import.meta.env.VITE_MOVIE_API_TOKEN; // import the api token from env.local
const PAGE_PER_BUCKET = 10;

const MovieSearchContext = createContext({});

const useMovieSearchContext = () => {
  const movieSearchContext = useContext(MovieSearchContext);
  if (movieSearchContext === undefined) {
    throw new Error('useMovieSearchContext must be used within a MovieSearchProvider');

  }
  return movieSearchContext; 
};

const MovieSearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [currPageNum, setCurrPageNum] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const numOfPages = data?.total_pages;
  const numOfResults = data?.total_results;
  const movies = data?.results?.map((result) => { return result }) || [];
  const currBucket = currPageNum !== null ? Math.floor((currPageNum - 1) / PAGE_PER_BUCKET) : null;
  const lastBucket = numOfPages !== undefined ? Math.floor((numOfPages - 1) / PAGE_PER_BUCKET) : null;

  useEffect(() => {
    if (currPageNum === null) {
      return;
    }

    setIsLoading(true);
    setIsError(false);

    const controller = new AbortController();
    const options  = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      },
      signal: controller.signal
    };

    fetch(`${API_ENDPOINT}?query=${query}&page=${currPageNum}`, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Invalid HTTPS Request');
      }
      return res.json();

    }).then((data) => {      
      setIsLoading(false);
      setData(data);
  
    }).catch((err) => {
      if (err.name === 'AbortError') {
        return;
      }
      setIsError(true);

    }).finally(() => {
      setIsLoading(false);
    });

    return () => {
      controller.abort();
    }

  }, [query, currPageNum]);


  const handleSearchQuery = (query) => {
    setQuery(query);
    setCurrPageNum(1);
  };

  const handlePageNumClick = (pageNum) => {
    setCurrPageNum(pageNum);
  };
  
  const handleNavButtonClick = (increment, lastpageNum) => {
    setCurrPageNum((prevpageNum) => {
      return prevpageNum + increment === lastpageNum ? lastpageNum : prevpageNum + increment;
    });
  };

  const value = {
    query,
    movies,
    currPageNum,
    currBucket,
    lastBucket,
    numOfPages,
    numOfResults,
    isLoading,
    isError,
    PAGE_PER_BUCKET,
    handleSearchQuery,
    handleNavButtonClick,
    handlePageNumClick
  };

  return (
    <MovieSearchContext.Provider value={value}>
      {children}
    </MovieSearchContext.Provider>
  )
}

export { useMovieSearchContext, MovieSearchProvider };