import PropTypes from 'prop-types'
import './movie.css';

const Movie = (props) => {

    const { name , image, status } = props
    return (
        <div className="movie__card">  
            <div className="movie__title"><span className="movie__title__text">{name}</span></div>          
            <div>
                <img className="movie__image" src={image} alt={name}></img>
            </div>           
            <span className="movie__status">{status}</span>            
        </div>
    )
}

Movie.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string
}

export default Movie
