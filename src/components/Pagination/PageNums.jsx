import React from 'react'
import { useMovieSearchContext } from '../../context/MovieSearchContext';
import style from './Pagination.module.css';


const PageNums = () => {
  const { 
    pageNumber,
    numOfPages,
    numOfResults,
    handlePageNumClick 
  } = useMovieSearchContext();

  const PageNumLinks = () => {
    const PageNums = [];

    for (let pageNum = 1; pageNum <= numOfPages; pageNum++) {
      const activePage = pageNum === pageNumber ? style.active : '';
      PageNums.push(
        <span
          className={`${style['page-number']} ${activePage}`}
          key={pageNum}
          onClick={() => { handlePageNumClick(pageNum) }}
        >
          {pageNum}
        </span>
      );
    }
    return PageNums; 
  };

  if (numOfResults === null) {
    return null;
  }

  return (
    <>
      <div className={style['page-numbers']}>
        <PageNumLinks/>
      </div>
      <div className={style['page-location']}> { pageNumber } / {numOfPages} pages </div>
    </>
  )
}

export default PageNums;
