import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies } from '../Services/api';
import '../Styles/global.css';

interface RowProps {
  title: string;
  endpoint: string;
}

const Row = ({ title, endpoint }: RowProps) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(endpoint);
      setMovies(data);
    };
    getMovies();
  }, [endpoint]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movies-container">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Row;
