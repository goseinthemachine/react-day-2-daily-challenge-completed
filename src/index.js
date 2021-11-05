import React from "react";
import ReactDOM from "react-dom";
import * as omdb from "./utils";
import MovieCard from "./components/movie-card";


const App = (props) => {
    return (
        <div className="row">
            <MovieCard Type={props.Type} Poster={props.Poster} Title={props.Title}/>
            <MovieCard Type={props.Type} Poster={props.Poster} Title={props.Title}/>
            <MovieCard Type={props.Type} Poster={props.Poster} Title={props.Title}/>
            <MovieCard Type={props.Type} Poster={props.Poster} Title={props.Title}/>
            <MovieCard Type={props.Type} Poster={props.Poster} Title={props.Title}/>
            <MovieCard Type={props.Type} Poster={props.Poster} Title={props.Title}/>
            <MovieCard Type={props.Type} Poster={props.Poster} Title={props.Title}/>
            <MovieCard Type={props.Type} Poster={props.Poster} Title={props.Title}/>
        </div>
    );
};

const results = omdb.getMoviesBySearchTerm("star")
.then(data => data.Search)
.then(async (data) => {
    return await omdb.getMovieDetailsById(data[0].imdbID);
})
.then(movie => {
    ReactDOM.render(React.createElement(App, movie), document.getElementById("root"))
})

