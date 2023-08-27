import Container from './components/Container/Container';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Pagination from './components/Pagination/Pagination';
import Loading from './components/Loading';
import Error from './components/Error';
import { MovieSearchProvider } from './context/MovieSearchContext.jsx'
import './App.css'


const App = () => {
  return (
    <MovieSearchProvider>
      <Container>
        <SearchBar />
        <SearchResults />
        <Loading />
        <Error />
        <Pagination />
      </Container>
    </MovieSearchProvider>
  );
}
export default App;
