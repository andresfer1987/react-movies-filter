import React from 'react'
import { useDispatch } from  'react-redux';
import './search.css';
import { moviesActions } from '../../actions/moviesActions';

const Search = () => {

   const dispatch = useDispatch();

    const onTextChanged = (e) => {
      if(e.target.value.length > 0){
        dispatch({type:'FILTER_DATA', payload: e.target.value});
      }
      else if(e.target.value.length === 0) {
        dispatch(moviesActions.fetchData());
      }     
    }
    return (
        <span className="search">
            <input onChange={e => onTextChanged(e)} className="search__input" type="text" placeholder="search"></input>
        </span>
    )
}

export default Search
