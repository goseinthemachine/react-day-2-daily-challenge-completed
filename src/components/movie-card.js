const MovieDetails = (props) => {
    const [initial, ...rest] = props.Type; 
    const alteredType = [initial.toUpperCase(), ...rest].join("");

    return (
    <div className="movie-card">
        <img className="movie-poster" src={props.Poster} />
        <p className="movie-title">{props.Title}</p>
        <p className="movie-type">{alteredType}</p>
    </div>
    );
}

export default MovieDetails;