// SearchResults.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const apiKey = '793f529e214f3b041b733709431628c4';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

    axios.get(apiUrl)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  }, [searchQuery]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Search Results for "{searchQuery}"</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {movies.map(movie => (
          <div key={movie.id} className="col">
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

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;