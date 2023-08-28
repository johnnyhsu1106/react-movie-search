const BACKDROP_BASE_URL = 'https://www.themoviedb.org/t/p/original';
import style from './SearchResults.module.css';


const Movie = ({ movie }) => {
  const {
    title, 
    backdrop_path, 
    release_date, 
    overview 
  } = movie; 
  
  const imgSrc = backdrop_path !== null ? `${BACKDROP_BASE_URL}${backdrop_path}` : null;
  const Image = imgSrc ? <img className={style.backdrop} src={imgSrc} alt={title} /> : <i>sorry, no image</i>
  
  return (
    <div className={style.movie}>
      <h3>{title}</h3>
      <p> Release Date:  <time dateTime={release_date}>{release_date}</time></p>
      { Image }
      <p> {overview} </p>

    </div>
  );
}

export default Movie;