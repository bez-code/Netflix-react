import { useState } from 'react';
import '../Styles/global.css';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    name: string;
    backdrop_path: string;
    overview: string;
    video?: boolean;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageBase = "https://image.tmdb.org/t/p/w500";
  const videoBase = "https://www.youtube.com/embed/";

  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && movie.video ? (
        <iframe
          src={`${videoBase}${movie.id}`}
          title={movie.title || movie.name}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <img 
          src={`${imageBase}${movie.backdrop_path}`}
          alt={movie.title || movie.name}
        />
      )}
      {isHovered && (
        <div className="movie-info">
          <h3>{movie.title || movie.name}</h3>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
