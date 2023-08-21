const SearchResultsTitle = ({
  numOfResults,
  pageNumber,
  numOfPages
}) => {
  return (
    <>
      <h2> {numOfResults > 0 ? `Search Result${numOfResults > 1 ? 's': ''} ${numOfResults}` : 'No Result' } </h2>
      { numOfResults !== 0 ? <p> {pageNumber} / {numOfPages} pages </p> : null } 
    </>
  )
}

export default SearchResultsTitle;
