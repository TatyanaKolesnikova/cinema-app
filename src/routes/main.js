import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";


import { Layout } from 'antd';
import { getMovies } from '../actions';

import { MainPageContainer, MoviePageContainer } from '../container';

const { Content } = Layout;

class Main extends React.Component{

    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const {isLoading} = this.props;
        return(
            <Content>
                {!isLoading && <Switch>
                    <Route path={"/"} exact component={MainPageContainer} />
                    <Route path={"/movie/:id"} component={MoviePageContainer} />
                </Switch>
                }
            </Content>
        )
    }
}
const mapDispatchToProps = {
    getMovies: getMovies
};
const mapStateToProps = (state) => ({
    isLoading: state.loading.isLoading
})
export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)