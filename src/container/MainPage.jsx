import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from 'antd';
import {map} from "rxjs";

const { Meta } = Card;

const MainPage = ({ movies }) => {
    console.log(movies);
    return (
        <div>
            <Row>
            {
                movies.map(item => (
                    <Col span={6} key={item._id}>
                        <Card
                            hoverable
                            cover={<img alt="example" src={item.poster}/>}
                        >
                            <Meta title={item.title}/>
                        </Card>
                    </Col>
                ))
            }
            </Row>
        </div>

    );
};

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);