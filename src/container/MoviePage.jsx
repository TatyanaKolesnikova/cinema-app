import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { InfoBlockMovie } from "../components";

class MoviePage extends Component{
    state = {
        movie: {}
    };

    componentDidMount() {
        const { match, movies } = this.props;
        const movieID = match.params.id;
        const movie = movies.find(item => item._id === movieID);

        this.setState({
            movie: movie
        })
    };
    checkArray = (arr) => {
        if(arr[arr.length - 1]){
            return arr.join(", ");
        }else{
            return arr.join(", ").slice(0,-2);
        }
    };

    render() {
        const {movie} = this.state;
        const genre = movie.genre ? this.checkArray(movie.genre) : "";
        const actors = movie.actors ? this.checkArray(movie.actors) : "";
        const country = movie.country ? this.checkArray(movie.country) : "";

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
                        <Link to='/schedule' className="btn-buy">Купить билет</Link>
                    </div>
                    <div className="col-60">
                        <dl className="list-movie">
                            {+genre !== 0 ? <InfoBlockMovie title={`Жанр`} content={genre} /> : ""}
                            {+actors !== 0 ? <InfoBlockMovie title={`Актеры`} content={actors} /> : ""}
                            {+country !== 0 ? <InfoBlockMovie title={`Страна`} content={country} /> : ""}
                            <InfoBlockMovie title={`Описание фильма`} content={movie.description} />
                            <dt>Трейлер</dt>
                            <dd>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={movie.trailer}
                                    title="video"
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
};

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MoviePageContainer = connect(mapStateToProps)(MoviePage);