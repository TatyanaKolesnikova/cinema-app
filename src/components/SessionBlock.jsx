import React from "react";

import { MovieSession } from "./MovieSession";

export const SessionBlock = ({dateMovies}) => {
    return dateMovies.map((elem) => (
        <MovieSession key={elem._id} session={elem} />
    ))
};

