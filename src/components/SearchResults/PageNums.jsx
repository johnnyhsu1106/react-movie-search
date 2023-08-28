import React from 'react'
import { useMovieSearchContext } from '../../context/MovieSearchContext';
import style from './SearchResults.module.css';


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
      PageNums.push(
        <span
          className='page-number'
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
      <p> { pageNumber } / {numOfPages} pages </p>
    </>
  )
}

export default PageNums;
