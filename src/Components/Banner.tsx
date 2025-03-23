import { useState, useEffect } from 'react';
import { fetchMovies, ENDPOINTS } from '../Services/api';
import '../Styles/Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchBannerMovie = async () => {
      const movies = await fetchMovies(ENDPOINTS.NETFLIX_ORIGINALS);
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    };
    fetchBannerMovie();
  }, []);

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if (!movie) return null;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
