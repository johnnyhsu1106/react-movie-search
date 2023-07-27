import { useRef } from 'react'

const SearchBar = ({ onSearchQuery }) => {
  const searchInputRef = useRef();

  const onSubmitSearchForm = (e) => {
    e.preventDefault();
    if (searchInputRef.current.value.trim() === '') {
      return;
    }

    onSearchQuery(searchInputRef.current.value);
    searchInputRef.current.value = null;
  }

  return (
    <form onSubmit={onSubmitSearchForm}>
      <input
        className='search-bar'
        type='text' 
        placeholder='Search the movie'
        ref={searchInputRef}
      />
      <button
        className='search-submit-btn btn' 
        type='submit'> Submit 
      </button>
    </form>
  
  )
}

export default SearchBar;