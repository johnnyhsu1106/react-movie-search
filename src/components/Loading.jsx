import { useMovieSearchContext } from '../context/MovieSearchContext'


const Loading = () => {
  const { isLoading } = useMovieSearchContext();

  return (
    isLoading ? <div>Loading....</div> : null
  )
}

export default Loading