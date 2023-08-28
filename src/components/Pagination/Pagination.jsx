import { useMovieSearchContext } from '../../context/MovieSearchContext';
import  PaginationButton from './PaginationButton';
import style from './Pagination.module.css';
import Loading from '../Loading';
import Error from '../Error';

const Pagination = () => {
  const {
    movies,
    pageNumber,
    numOfPages,
    handleButtonClick
  } = useMovieSearchContext();

  if (movies.length === 0) {
    return null;
  }

  return (
    <div className={style['nav-btns']}>
      <PaginationButton
        onClickButton={ pageNumber === 1 ? null : () => { handleButtonClick(-1, 1) }} 
        text='prev'/>

      <PaginationButton
        onClickButton={ pageNumber === numOfPages ? null : () => { handleButtonClick(1, numOfPages)}} 
        text='next'/>
    </div>
  )
}

export default Pagination