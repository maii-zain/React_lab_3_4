// FavoritesPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../redux/actions'; 
function FavoritesPag() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleRemoveFromFavorites = (movieId) => {
   
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5" style={{ color: 'orange', border: '2px solid orange', padding: '10px', borderRadius: '10px' }}>
        Favorite Movies
      </h1>
      {favorites.length === 0 ? (
        <p className="text-center">You haven't added any movies to your favorites yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {favorites.map((movie) => (
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
                  <p className="text-danger">In Favorites</p>
                  <button
                    className="btn btn-danger orange-button"
                    onClick={() => handleRemoveFromFavorites(movie.id)}
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPag;
