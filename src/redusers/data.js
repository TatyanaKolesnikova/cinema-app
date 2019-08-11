import {SET_MOVIES, SET_ROOMS, SET_SESSION} from "../constants";

const initialValues = {
    movies: [],
    genres: [],
    sessions: [],
    rooms: []
};

export const data = (state = initialValues, action ) => {
    switch(action.type) {
        case SET_MOVIES:
            const genres = action.payload.reduce((acc, item) => {
                if(item.genre && item.genre.length){
                    item.genre.forEach((elem) => {
                        if(elem && !acc.includes(elem.trim())){
                            acc.push(elem.trim());
                        }
                    })
                }
                return acc;
            }, []);
            return {
                ...state,
                movies: action.payload,
                genres: genres
            };
        case SET_SESSION:
            const sortedArr = action.payload.sort((a,b) => {
                if(new Date(a.date) > new Date(b.date)){
                    return 1;
                }
                if(new Date(a.date) < new Date(b.date)){
                    return -1;
                }
                return  0;
            });
            const newArr = sortedArr.reduce((acc, item) => {
                if(!acc.length){
                    acc.push([]);
                }
                const lastEl = acc[acc.length-1];
                const lastElDate = lastEl.length ? lastEl[0].date.split("T")[0] : null;
                const itemDate = item.date.split("T")[0];
                const differentDates = +new Date(lastElDate) !== +new Date(itemDate);

                if(lastEl.length && differentDates){
                    return [...acc, [item]];

                }
                acc[acc.length-1].push(item);
                return acc;
            }, []);

            return {
                ...state,
                sessions: newArr
            };
        case SET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            };
        default:
            return state;
    }
};
