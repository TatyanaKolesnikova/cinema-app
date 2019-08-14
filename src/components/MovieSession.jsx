import React, {useState} from "react";
import { Link } from "react-router-dom";
import {ModalBuy} from "./Modal";

export const MovieSession = ({ session }) => {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);

    const handleClickBuy = () => {
        setShowModal(true);
    };
    return (
        <React.Fragment>
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
                        <div className="btn-buy" onClick={handleClickBuy} >Купить билет</div>
                        {showModal && <ModalBuy session={session}/>}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};