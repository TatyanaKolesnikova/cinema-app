import axios from "axios";

import { URL_SESSION, SET_SESSION, URL_ROOMS, SET_ROOMS} from "../constants";
import { failLoading } from "./general";

export const setSession = (session) => ({ type:SET_SESSION, payload: session });
export const setRooms = (rooms) => ({ type:SET_ROOMS, payload: rooms });

export const getSession = () => {
    return dispatch => {
        Promise.all([axios.get(URL_SESSION), axios.get(URL_ROOMS)])
            .then(([sessions, rooms]) => {
                dispatch(setSession(sessions.data.session));
                dispatch(setRooms(rooms.data.rooms));
            })
            .catch((error) =>  {
                dispatch(failLoading());
            })
    }
}
