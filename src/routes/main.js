import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Layout } from 'antd';

import { getMovies } from '../actions';
import { MainPageContainer, MoviePageContainer, SchedulePageContainer } from '../container';

const { Content } = Layout;

class Main extends React.Component{

    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return(
            <Content>
                <Switch>
                    <Route path={"/"} exact component={MainPageContainer} />
                    <Route path={"/movie/:id"} component={MoviePageContainer} />
                    <Route path={"/schedule"} component={SchedulePageContainer}  />
                </Switch>
            </Content>
        )
    }
}
const mapDispatchToProps = {
    getMovies: getMovies
};

export const MainContainer = connect(null, mapDispatchToProps)(Main)