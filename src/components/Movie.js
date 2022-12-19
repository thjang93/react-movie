import PropTypes from 'prop-types'

function Movie({id, image, title, summary, genres}) {
    return (
        <div key={id}>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.protTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;