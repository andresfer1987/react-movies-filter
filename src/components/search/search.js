import React from 'react'
import PropTypes from 'prop-types'
import './search.css';

const Search = ({dispatch}) => {

    const onTextChanged = (e) => {
      if(e.target.value != '')
      dispatch(() => ({type:'FILTER_DATA', payload: e.target.value}));

      dispatch({type:'FETCH_DATA_REQUEST'});
    }
    return (
        <span className="search">
            <input onChange={e => onTextChanged(e)} className="search__input" type="text" placeholder="search"></input>
        </span>
    )
}

Search.propTypes = {

}

export default Search
