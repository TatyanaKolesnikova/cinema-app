import React, { Component  } from "react";
import { connect } from "react-redux";

class MoviePage extends React.Component{
    state = {
        movie: {}
    }
    componentDidMount() {
        const { match, movies } = this.props;
        const movieID = match.params.id;
        const movie = movies.find(item => item._id === movieID);

        this.setState({movie: movie})
    }
    render() {
        const {movie} = this.state;
        const country = movie.country ? movie.country.join(", ") : '';
        const actors = movie.actors ? movie.actors.join(", ") : '';
        const genre = movie.genre ? movie.genre.join(", ") : '';


        console.log(movie.actors);
        console.log(this.state.movie);
        const {isLoading} = this.props;
        console.log(isLoading);
        return(



            <div className="container">
                <h1>{movie.title}</h1>
                <div className="row">
                    <div className="col-40">
                        <figure className="movie-img"><img src={movie.poster} alt={movie.title} /></figure>
                    </div>
                    <div className="col-60">
                        <dl className="list-movie">
                            <dt>Жанр</dt>
                            <dd>{genre}</dd>
                            <dt>Актеры</dt>
                            <dd>{actors}</dd>
                            <dt>Страна</dt>
                            <dd>{country}</dd>
                                {/*{ actors.length ? (*/}
                                {/*    <dt>Актеры</dt>*/}
                                {/*) : ''*/}
                                {/*}*/}
                            <dt>Описание</dt>
                            <dd>{movie.description}</dd>
                            <dt>Трейлер</dt>
                            <dd>
                                <iframe width="100%" height="315" src={movie.trailer}
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

// const MoviePage = (props) => {
//
//
//
//
//
//    console.log(movieID);
//     console.log(props);
//
//     return (
//         <div className="container">
//
//                     <div></div>
//
//         </div>
//
//     );
// };

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    isLoading: state.loading.isLoading
});

export const MoviePageContainer = connect(mapStateToProps)(MoviePage);