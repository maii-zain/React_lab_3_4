import React, { useEffect, useState } from 'react';
import axios from './axiosConfig';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/movie/${id}`)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card border-0">
        <div className="row g-0" style={{ border: "2px solid orange" }}>
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              className="img-fluid rounded-start"
              alt={movieDetails.title}
              style={{ borderRadius: "10%", width: "100%", maxHeight: "auto" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              
              <br/><br/> <br/><br/><p className="card-text" style={{ fontFamily: "sans-serif", fontSize: "120%" }}>
                <div style={{backgroundColor:"orange",marginTop:"-12%",borderRadius:"%"}}>{movieDetails.title} </div> <br/><br/>
                {movieDetails.overview}
                {movieDetails.video}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
