import React from "react";
import { Link } from "react-router-dom";

export const MovieSession = ({ session }) => (
    <div className="col-20">
        <div className="card-movie">
            <Link to={"/movie/" + session._id} >
                <div className="hold-img">
                    <img src={session.movie.poster} />
                </div>
                <h3>{session.movie.title}</h3>
            </Link>
            <p>{`${session.movie.description.slice(0,180)} ...`}</p>
            <div className="block-info">
                <span>{session.room}</span>
                <div>{new Date(session.date).toLocaleTimeString().slice(0, -3)}</div>
                <button className="btn-buy">Купить билет</button>
            </div>
        </div>
    </div>
);