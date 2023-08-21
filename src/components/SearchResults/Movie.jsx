const BACKDROP_BASE_URL = 'https://www.themoviedb.org/t/p/original';

const Movie = ({ movie }) => {
  const {
    title, 
    backdrop_path, 
    release_date, 
    overview 
  } = movie; 
  
  const imgSrc = backdrop_path !== null ? `${BACKDROP_BASE_URL}${backdrop_path}` : null;
  const Image = imgSrc ? <img className='backdrop' src={imgSrc} alt={title} /> : <i>sorry, no image</i>
  
  return (
    <div>
      <h3>{title}</h3>
      <p> Release Date:  <time dateTime={release_date}>{release_date}</time></p>
      <p> {overview} </p>
      { Image }
    </div>
  );
}

export default Movie;