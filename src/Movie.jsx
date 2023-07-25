import React from 'react'

const BACKDROP_BASE_URL = 'https://www.themoviedb.org/t/p/original';

const Movie = ( { movie }) => {
  const { id, title, backdrop_path, release_date, overview } = movie; 
  const imgSrc = backdrop_path !== null ? `${BACKDROP_BASE_URL}${backdrop_path}` : null;
  const Image = imgSrc ? <img className='backdrop' src={imgSrc} alt={title} /> : null


  
  return (
    <div key={id}>
    <h3 key={id}>{title}</h3>
    <p> Release Date:  <time dateTime={release_date}>{release_date}</time></p>
    <p> {overview} </p>
    { Image }
    </div>
  );
}

export default Movie;