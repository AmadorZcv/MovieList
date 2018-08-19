import Axios from '../../node_modules/axios';
import {movieDBKey} from './apiKeys';

const get_upcoming_movies_path = (page, key) =>
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR&page=${page}`;

export function get_upcoming_movies (page) {
  return Axios.get (get_upcoming_movies_path (page, movieDBKey));
}

export const moviePosterPath = posterPath =>
  `http://image.tmdb.org/t/p/w185/${posterPath}`;
