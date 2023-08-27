import { useMovieSearchContext } from '../context/MovieSearchContext';


const Error = () => {
  const { hasError } = useMovieSearchContext();
  
  return (
    hasError ? <div>Somthing goes wrong</div> : null
  )
}

export default Error;