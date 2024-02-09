
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PopularMovies from './Pages/ShowFilms';
import MovieDetails from './Pages/MovieDetails';
// import Favorites from './Components/Favorites';
import AppNavbar from './Components/Nav';

import FavoritesPag from './Pages/FavoritesPage';
import SearchResults from './Pages/SearchResults';
import HomePage from './Pages/Home';
import ErNotFound from './Pages/NotFound';

function App() {
  return (
    <>
    
      <AppNavbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<PopularMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        <Route path="/favorites" element={<FavoritesPag />} /> 
        <Route path="/search" element={<SearchResults />} />
        <Route path={"*"} element={<ErNotFound />} />
        
        
   
      </Routes>
    </>
  );
}

export default App;
