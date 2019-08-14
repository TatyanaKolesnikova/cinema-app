import React, {useState} from "react";
import { Link } from "react-router-dom";
import { ModalBuy } from "./Modal";

export const MovieSession = ({ session }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClickBuy = () => {
        setShowModal(!showModal);
    };

    return (
        <React.Fragment>
            <div className="col-20">
                <div className="card-movie">
                    <Link to={"/movie/" + session.movie._id} >
                        <span className="hold-img">
                            <img src={session.movie.poster} alt="poster" />
                        </span>
                        <strong>{session.movie.title}</strong>
                    </Link>
                    <p>{`${session.movie.description.slice(0,175)} ...`}</p>
                    <div className="block-info">
                        <div>Зал: <span className={`color-${session.room}`}>{session.room}</span></div>
                        <div>Время: {new Date(session.date).toLocaleTimeString().slice(0, -3)}</div>
                    </div>
                    <div className="btn-buy" onClick={handleClickBuy} >Купить билет</div>
                    {showModal && <ModalBuy session={session} handleClickBuy={handleClickBuy}/>}
                </div>
            </div>
        </React.Fragment>
    )
};