import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies } from '../Services/api';
import MovieCard from '../Components/MovieCard';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const data = await searchMovies(query);
        setResults(data);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <div className="search-page">
      <h2>Search Results for: {query}</h2>
      <div className="movies-container">
        {results.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
