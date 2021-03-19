
const fetchData = () => {    
    return dispatch => {
        dispatch({type:'FETCH_DATA_REQUEST'});
        setTimeout(() => fetch('https://rickandmortyapi.com/api/character')
        .then(data =>data.json())
        .then(json =>  dispatch({type:'FETCH_DATA_SUCCESS',payload:json.results})), 2000)
       
     };
}

export const moviesActions ={
    fetchData
}