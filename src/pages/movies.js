import { useEffect, useState } from 'react';
import { getMovies } from '../utils/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies();
    
        if (Array.isArray(response.data.data)) {
          setMovies(response.data.data);
        } else {
          console.error('API response does not contain an array of books:>>', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    console.log(movies);
    fetchData();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img width={100} src={movie.attributes.poster}/>
            <p>{movie.attributes.title}</p>
            <p>{movie.attributes.release_date}</p>
            <p>{movie.attributes.rating}</p>
            <p>{movie.attributes.running_time}</p>
          </div>
            
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage
