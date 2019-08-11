import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDom from "react-dom";

class MoviePage extends Component{
    state = {
        movie: {},
        isShow: false
    }
    toggleShowModal = () => this.setState((prevState) => ({isShow: !prevState.isShow}));
    componentDidMount() {
        const { match, movies } = this.props;
        const movieID = match.params.id;
        const movie = movies.find(item => item._id === movieID);

        this.setState({
            movie: movie
        })
    }
  // checkArray = (arr) => {
  //       if(arr[arr.length - 1]){
  //           return arr.join(", ");
  //       }else{
  //           return arr.join(", ").slice(0,-2);
  //       }
  //   };

    render() {
        const {movie} = this.state;
        const country = movie.country ? movie.country.join(", ") : '';
        const actors = movie.actors ? movie.actors.join(", ") : '';
        const genre = movie.genre ? movie.genre.join(", ") : '';


        console.log(!!actors);
        console.log(movie.genre);


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
                        <button className="btn-buy" onClick={this.toggleShowModal} >Купить билет</button>
                        {this.state.isShow && <Modal hideModal={this.toggleShowModal}/>
                        }
                    </div>
                    <div className="col-60">
                        <dl className="list-movie">
                            <dt>Жанр</dt>
                            {/*<dd>{this.checkArray(movie.genre)}</dd>*/}
                            <dd>{genre}</dd>
                            <dt>Актеры</dt>
                            <dd>{actors}</dd>
                            { actors ? (
                                <dt>Актеры</dt>
                            ) : ''
                            }
                            <dt>Страна</dt>
                            <dd>{country}</dd>
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
class Modal extends React.Component{
    render() {
        return(
            ReactDom.createPortal(
                <div className="modal">
                    <h1>kjfgh</h1>
                    <button onClick={this.props.hideModal}> Hide</button>
                </div>,
                document.getElementById("portal")
            )
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    isLoading: state.loading.isLoading
});

export const MoviePageContainer = connect(mapStateToProps)(MoviePage);