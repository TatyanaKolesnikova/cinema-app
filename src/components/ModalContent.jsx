import React from "react";
import axios from "axios";
import {Icon, Spin} from "antd";

import { URL_SPACE_SHADOW } from "../constants";
import { getSortedPlaces, getRowsArray, getRandom } from "../utils";
import { Places } from "./index";


export class ModalContent extends React.Component{
    state = {
        isLoading: true,
        space: []
    }
     componentDidMount() {

        axios.get(`${URL_SPACE_SHADOW}?session=${this.props.session._id}`)
            .then(({data}) => {

                this.setLoading();
                this.getPlaceArray(data.space);
            })
            .catch((error) =>  {
                this.setLoading();
            })
    }

    setLoading = () => this.setState({isLoading:false});

    getPlaceArray = (arr) => {
        const sortByRow = getSortedPlaces(arr, "row");
        //const rows = getRowsArray(sortByRow);
        const rows = sortByRow.reduce((acc, elem) => {
            if(!acc.length){
                return [[elem]];
            }
            const hasSameRow = acc.some(rowArray => rowArray.some(obj => obj.row === elem.row));
            if(hasSameRow){
                return acc.map(rowArray => {
                    const hasSameRow = rowArray.some(obj => obj.row === elem.row);
                    if(hasSameRow){
                        return [...rowArray, elem];
                    }
                    return rowArray;
                });
            }else{
                return [...acc, [elem]];
            }
        }, []);
        const rowsSortedByPlace = rows.map(item => {
            return getSortedPlaces(item, "place");
        });

        this.setState({space: rowsSortedByPlace.map((item) => {
                const random = getRandom(2, 6);
                return item.map(elem =>{
                    if(elem.place % random === 0){
                        return  {
                            ...elem,
                            booked: true
                        }
                    }
                    return elem;
                })
            })
        })
    };


    render() {
        const { isLoading, space } = this.state;
        const { session } = this.props;

        return(
            <div className="modal-overlay">
                <div className="modal-content">
                    {isLoading
                        ? <Spin indicator={<Icon type="loading-3-quarters" style={{fontSize: 76}} spin />} />
                        : <div>
                            <h2>{session.movie.title}</h2>
                            <div className="block-info">
                                <span>{session.room}</span>
                                <div>{new Date(session.date).toLocaleTimeString().slice(0, -3)}</div>
                            </div>
                            <Places space={space}/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}