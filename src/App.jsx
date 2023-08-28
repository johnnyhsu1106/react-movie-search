import Container from './components/Container/Container';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Pagination from './components/Pagination/Pagination';

import { MovieSearchProvider } from './context/MovieSearchContext.jsx'
import './App.css'


const App = () => {
  return (
    <MovieSearchProvider>
      <Container>
        <SearchBar />
        <Pagination />
        <SearchResults />
      </Container>
    </MovieSearchProvider>
  );
}
export default App;
