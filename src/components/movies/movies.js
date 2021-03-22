import React from 'react'
import { useSelector } from 'react-redux';
import './movies.css';
import Movie from '../movie';

const Movies = () => {
    const movies = useSelector(state => state.movies)?.movies ;
    return (
        <div className="movies__container">
            <ul className="movies__list">
            {movies && movies.map(movie => {   
              return ( <li id={movie?.id} className="movies__item">
                     <Movie id={movie?.id} name={movie?.name} status={movie?.status} image={movie?.image} /> 
                      </li>)                           
            })} 
            </ul>                       
        </div>
    )
}


export default Movies
