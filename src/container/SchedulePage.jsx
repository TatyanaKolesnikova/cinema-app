import React, {useState} from "react";
import { connect } from "react-redux";

import { getSession } from "../actions";
import { SessionBlock, ModalBuy } from "../components";
import {dateOptions} from "../constants";
import {Icon, Spin, Tabs} from "antd";

const { TabPane } = Tabs;

class SchedulePage extends React.Component{
    state = {
        movie: {}
    }

    componentDidMount() {
        this.props.getSession();
    }
    getSessions = () => {
        const {movies, sessions, rooms} = this.props;
        const sessionArr =  movies.length && sessions.length && rooms.length ? sessions.map((item) => {
            return item.map(elem => ({
                ...elem,
                room: rooms.find(room => room._id === elem.room).name,
                movie: movies.find(movie => movie._id === elem.movie)
            }))
        }) : [];
        return sessionArr.map(item => {
            return item.filter(elem => elem.movie)
        })
    }

    render() {
        return (
            <div className="box-shedules">
                <Tabs defaultActiveKey="1" tabPosition='top' tabBarGutter={+4}>
                    {
                        this.getSessions().map((item, i) => (
                            <TabPane tab={new Date(item[0].date).toLocaleString("ru", dateOptions)} key={i} activeKey='0'>
                                <SessionBlock  dateMovies={item} />
                            </TabPane>
                        ))
                    }
                </Tabs>
            </div>
        )
    }
}
const mapDispatchToProps = {
    getSession : getSession
}
const mapStateToProps = (state) => ({
    sessions : state.data.sessions,
    movies: state.data.movies,
    rooms: state.data.rooms

});

export const SchedulePageContainer = connect(mapStateToProps, mapDispatchToProps)(SchedulePage);