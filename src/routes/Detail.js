import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';


function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
        console.log(movie);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className={styles.container}>
            {loading ?
                (
                    <h1>Loading...</h1>
                ) :
                (
                    <div className={styles.detail}>
                        <img className={styles.detail__image} src={movie.medium_cover_image} alt={movie.title}/>
                        <div>
                            <h2>{movie.title}</h2>
                            <h3>{movie.year}</h3>
                            <h3>rate : {movie.rating.toFixed(1)}</h3>
                            <h3>runtime : {movie.runtime ? movie.runtime : "unknown"}</h3>
                            <p>{movie.description_full}</p>
                            <ul className={styles.detail__genres}>
                                {movie.genres.map(genre => (
                                    <li key={genre}>{genre}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Detail;