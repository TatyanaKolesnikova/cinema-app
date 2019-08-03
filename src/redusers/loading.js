import { IS_LOADING, FAIL_LOADING, SET_MOVIES } from "../constants";

const initialValues = {
    isLoading: false
};

export const loading = ( state = initialValues, action ) => {
    switch(action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case SET_MOVIES:
        case FAIL_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};