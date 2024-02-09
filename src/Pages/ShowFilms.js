import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addToFavorites, removeFromFavorites } from '../redux/actions';

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const apiKey = '793f529e214f3b041b733709431628c4';
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`;

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching popular movies:', error);
      });
  }, [apiUrl]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const isFavorite = (movieId) => favorites.some((favMovie) => favMovie.id === movieId);

  const handleFavoriteToggle = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5" style={{ color: "orange", border: "2px solid orange", padding: '10px', borderRadius: '10px' }}>Popular Movies</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {movies.map(movie => (
          <div key={movie.id} className="col">
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                  style={{ objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                </div>
                <div className="card-footer">
                  <Link to={`/movie/${movie.id}`} className="btn btn-primary" style={{ backgroundColor: 'orange', border: 'none', borderRadius: '5px' }}>
                    View Details
                  </Link>
                  <button
                    className={`btn ${isFavorite(movie.id) ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={() => handleFavoriteToggle(movie)}
                    style={{ marginLeft: '10px' }}
                  >
                    {isFavorite(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <span
          className={`arrow ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
          style={{ fontSize: '2em', marginRight: '2%', cursor: 'pointer' }}
        >
          &#8249; 
        </span>
        <span
          className={`arrow ${currentPage === 10 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
          style={{ fontSize: '2em', marginLeft: '2%', cursor: 'pointer' }}
        >
          &#8250; 
        </span>
      </div>
    </div>
  );
}

export default PopularMovies;
