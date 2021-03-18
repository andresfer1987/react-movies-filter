import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './movies.css';
import Movie from '../movie';

const Movies = ({movies}) => {

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

Movies.propTypes = {

}

export default Movies
