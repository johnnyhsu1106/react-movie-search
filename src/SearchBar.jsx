import { useRef } from 'react'

const SearchBar = ({ query, onSearchQuery }) => {
  const searchInputRef = useRef();

  const onSubmitSearchForm = (e) => {
    e.preventDefault();
    onSearchQuery(searchInputRef.current.value);
    searchInputRef.current.value = null;

  }
  return (
    <form onSubmit={onSubmitSearchForm}>
      <input
        className='search-bar' 
        ref={searchInputRef}
        type='text'
      />
      <button
        className='search-submit-btn btn' 
        type='submit'> Submit </button>
    </form>
  
  )
}

export default SearchBar;