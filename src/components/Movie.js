import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, image, title, summary, genres }) {
    return (
        <div key={id}>
            <img src={image} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
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
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;