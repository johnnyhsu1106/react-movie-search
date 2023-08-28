const BACKDROP_BASE_URL = 'https://www.themoviedb.org/t/p/original';
import style from './SearchResults.module.css';


const Movie = ({ movie }) => {
  const {
    title, 
    backdrop_path, 
    release_date, 
    // overview 
  } = movie; 
  
  const imgSrc = backdrop_path !== null ? `${BACKDROP_BASE_URL}${backdrop_path}` : null;
  const Image = imgSrc ? <img className={style.backdrop} src={imgSrc} alt={title} /> : <i className={style['no-image']}>no image</i>
  
  return (
    <div className={style.movie}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.date}> Release Date:  <time dateTime={release_date}>{release_date}</time></p>
      { Image }
    </div>
  );
}

export default Movie;