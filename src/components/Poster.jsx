import React from "react";

export const Poster = ({ posterLink }) => (
    <div>
        <img src={posterLink} alt="poster"/>
        <button className="btn-buy">Купить билет</button>
    </div>
);