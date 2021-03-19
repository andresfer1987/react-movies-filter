import React from 'react'
import { useSelector } from 'react-redux';

export const Loader = () => {
    const loader = useSelector(state => state.movies).loading;
    return (
    <>
        { loader &&  <div class="loader"></div>  }
    </>        
    )
}
