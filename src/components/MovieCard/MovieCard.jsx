import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-link">
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <div className="movie-rating">Rating: {movie.rating}/10</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;