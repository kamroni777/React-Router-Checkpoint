import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/movies.json');
        const data = await response.json();
        const foundMovie = data.find(m => m.id === parseInt(id));
        setMovie(foundMovie);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-details">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>{movie.title}</h1>
      
      <div className="details-content">
        <div className="poster-section">
          <img src={movie.posterURL} alt={movie.title} />
          <div className="rating">Rating: {movie.rating}/10</div>
        </div>
        
        <div className="info-section">
          <h2>Description</h2>
          <p>{movie.description}</p>
          
          <h2>Trailer</h2>
          <div className="trailer-container">
            <iframe
              src={movie.trailerLink}
              title={`${movie.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;