import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import {Icon, Layout, Spin} from 'antd';

import { getMovies } from '../actions';
import { MainPageContainer, MoviePageContainer, SchedulePageContainer } from '../container';

const { Content } = Layout;

class Main extends React.Component{

    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const { isLoading } = this.props;
        if(isLoading){
            return <Spin indicator={<Icon type="loading-3-quarters" style={{fontSize: 76}} spin />} />
        }
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
const mapStateToProps = (state) => ({
    isLoading: state.loading.isLoading
});
export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);