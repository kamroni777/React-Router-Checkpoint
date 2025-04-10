import { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import Filter from '../Filter/Filter';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing technology.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      rating: 8.8,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
    );
  });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="home">
      <h1>Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        onTitleChange={setTitleFilter}
        onRateChange={setRateFilter}
      />
      <MovieList movies={filteredMovies} />
    
      <button onClick={() => addMovie({
        id: movies.length + 1,
        title: 'New Movie',
        description: 'New description',
        posterURL: 'https://via.placeholder.com/300x450',
        rating: 7.5,
        trailerLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      })}>
        Add Sample Movie
      </button>
    </div>
  );
};

export default Home;