import axios from 'axios';
// Base da URL: https://api.themoviedb.org/3/ 
// URL DA API: /movie/now_playing?api_key=2bac6348fd54c01f4179e82a16df80e8&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api;