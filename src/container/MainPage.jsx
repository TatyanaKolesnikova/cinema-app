import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from 'antd';

const { Meta } = Card;

const MainPage = ({ movies }) => {
    return (
        <div className="row-list-movies">
            {
                movies.map(item => (
                    <div  key={item.id} className="card-movie">
                        <Link to={"/movie/" + item._id} >
                            <Card
                                hoverable
                                cover={<img alt="example" src={item.poster}/>}
                            >
                                <Meta title={item.title}/>
                            </Card>
                        </Link>
                    </div>
                ))
            }
        </div>

    );
};

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);