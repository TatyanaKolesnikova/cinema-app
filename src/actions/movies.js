import axios from "axios";
import { URL_MOVIES, SET_MOVIES, IS_LOADING, FAIL_LOADING } from "../constants";
import {movies} from "../redusers/movies";

export const isLoading = () => ({ type: IS_LOADING });
export const setMovies = (movies) => ({ type:SET_MOVIES, payload: movies });
export const failLoading = () => ({ type: FAIL_LOADING });

export const getMovies = () => {
    return dispatch => {
        dispatch(isLoading());
        axios.get(URL_MOVIES)
            .then(({data}) => dispatch(setMovies(data.movie)))
            .catch((error) =>  {
                dispatch(failLoading());
            })
    }
}
