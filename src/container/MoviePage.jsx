import React, { Component } from "react";
import { connect } from "react-redux";
import {Icon, Spin} from "antd";

class MoviePage extends Component{
    state = {
        movie: {}
    }

    componentDidMount() {
        const { match, movies } = this.props;
        const movieID = match.params.id;
        const movie = movies.find(item => item._id === movieID);
        console.log("movies", movies);

        this.setState({
            movie: movie
        })
    }
  checkArray = (arr) => {
        if(arr[arr.length - 1]){
            console.log('2222')
            return arr.join(", ");
        }else{
            console.log('33333')
            return arr.join(", ").slice(0,-2);
        }
    };

    render() {
        const {movie} = this.state;

        console.log("movie", typeof movie.actors);

        return(
            <div className="container">
                <h1>{movie.title}</h1>
                <div className="row">
                    <div className="col-40">
                        <figure className="movie-img">
                            <img
                                src={movie.poster}
                                alt={movie.title} />
                        </figure>
                        <button className="btn-buy"  >Купить билет</button>
                    </div>
                    <div className="col-60">
                        <dl className="list-movie">
                            <dt>Жанр</dt>
                            <dd>{movie.genre ? this.checkArray(movie.genre) : "" }</dd>
                            <dt>Актеры</dt>
                            <dd>{movie.actors ? this.checkArray(movie.actors) : "uuu" }</dd>

                            {/*{*/}
                            {/*    movie.actors ?*/}
                            {/*        <React.Fragment>*/}
                            {/*            <dt>Актеры</dt>*/}
                            {/*            <dd>{this.checkArray(movie.actors)}</dd>*/}
                            {/*        </React.Fragment>*/}
                            {/*    : "uuu"*/}
                            {/*}*/}
                            <dt>Страна</dt>
                            <dd>{movie.country ? this.checkArray(movie.country) : "" }</dd>
                            <dt>Описание фильма</dt>
                            <dd>{movie.description}</dd>
                            <dt>Трейлер</dt>
                            <dd>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={movie.trailer}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                                </dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MoviePageContainer = connect(mapStateToProps)(MoviePage);