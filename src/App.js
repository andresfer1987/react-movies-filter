import React, {useReducer, useEffect} from 'react'
import './App.css';
import  Movies  from './components/movies';
import Search from './components/search';
import Header from './components/header';

const initialState = {
  movies : [],
  loading: false,
  errorMessage :null
}

function reducer (state,action) {
  switch(action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state, loading:true
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state, movies:action.payload
      };
      case 'FETCH_DATA_FAILED':
        return {
          ...state,loading:false, errorMessage:action.error
        };
    case 'FILTER_DATA':
      return {
        ...state ,loading:true, movies: state.movies.filter(x => x.name.includes(action.payload))
      };
    case 'reset':
      return {
        ...state, loading:false, movies: action.payload
      }
    default:
      return state;

  }
}

const useCustomReducer = (reducer, initialState, middleware) => {
  const [state, dispatch] = useReducer(reducer,initialState);

  const dispatchWithMiddleware = (action) => {
    middleware(action, dispatch);
  }
  return [state, dispatchWithMiddleware];
}

function App() {

  const fechDataCreator = () => {
    return dispatch => fetch('https://rickandmortyapi.com/api/character')
    .then(data => {  return data.json()})
    .then(json => {  return dispatch({type:'FETCH_DATA_SUCCESS',payload:json.results})});
}
 
const middleware = (action, dispatch) => {
  if (typeof action === 'function') {
    return action(dispatch)
  }
  return dispatch(action);
}

  const [state, dispatch] = useCustomReducer(reducer, initialState, middleware)
 
  useEffect(() => {
    dispatch(fechDataCreator());
  },[])  

  return (
    <>
    <Header title="MOVIES FILTER"/>
    <Search dispatch={dispatch} />
    <Movies movies={state.movies} />   
    </>    
  );
}

export default App;
