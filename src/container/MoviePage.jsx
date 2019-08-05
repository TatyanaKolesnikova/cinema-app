import React, { Component  } from "react";
import { connect } from "react-redux";

class MoviePage extends React.Component{
    state = {
        movie: []
    }
    componentDidMount() {
        const { match, movies } = this.props;
        const movieID = match.params.id;
        const movie = movies.find(item => item._id === movieID);

        this.setState({movie: movie})
    }
    render() {
        console.log(this.state.movie);
        return(
            <div></div>
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
    movies: state.data.movies
});

export const MoviePageContainer = connect(mapStateToProps)(MoviePage);