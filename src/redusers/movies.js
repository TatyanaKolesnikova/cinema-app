import { SET_MOVIES } from "../constants";

const initialValues = {
    movies: []
};

export const movies = ( state = initialValues, action ) => {
    switch(action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
};
