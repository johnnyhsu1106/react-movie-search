import { useMovieSearchContext } from '../../context/MovieSearchContext';
import  PaginationButton from './PaginationButton';
import style from './Pagination.module.css';


const Pagination = () => {
  const {
    pageNumber,
    numOfPages,
    handleButtonClick
  } = useMovieSearchContext();

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