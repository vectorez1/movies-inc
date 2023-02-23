import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '9c024169de071d4fbd135671bf5d05cf'; 
const URL = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`

export const updateVoteAverage = (movieId, newVoteAverage) => {
    // configure the axios request
    
    //axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(d=>console.log(d.data)).catch((error)=>console.log(error));
};