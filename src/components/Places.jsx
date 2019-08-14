import React from "react";

export const Places = ({space, handleChosePlace}) => {
    return (
        <div className="places">
            {space.map((item, i) => {
                return(
                    <div key={i} className="row">
                        <div className="row-title">Ряд {i + 1}</div>
                        {item.map((elem, y) => {
                            return (
                                <div key={`${i} - ${y}`}
                                    className={`place${elem.booked ? "-booked" : ""}`}
                                     onClick={() => handleChosePlace(elem)}
                                >
                                <span>{elem.place}</span>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
};