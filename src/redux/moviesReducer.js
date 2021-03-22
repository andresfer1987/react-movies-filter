const initialState = {
    movies : [],
    loading: false,
    errorMessage :null
  }

export const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_DATA_REQUEST':
          return {
            ...state, loading:true
          };
        case 'FETCH_DATA_SUCCESS':
          return {
            ...state, loading:false, movies:action.payload
          };
          case 'FETCH_DATA_FAILED':
            return {
              ...state,loading:false, errorMessage:action.error
            };
        case 'FILTER_DATA':
          return {
            ...state, movies: state.movies.filter(x => x.name.toUpperCase().includes(action.payload.toUpperCase()))
          };
        default:
          return state;
    
      }
}
