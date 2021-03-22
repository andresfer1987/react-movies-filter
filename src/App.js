import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import './App.css';
import  Movies  from './components/movies';
import Search from './components/search';
import Header from './components/header';
import { moviesActions } from './actions/moviesActions.js';
import { Loader } from './components/common/loader';


const App= () => {
  const dispatch = useDispatch(); 
 
  useEffect(() => {
    dispatch(moviesActions.fetchData());
   // eslint-disable-next-line
  },[])  

  return (
    <>
    <Header/>
    <Search />
    <Loader />
    <Movies />   
    </>    
  );
}

export default App;
