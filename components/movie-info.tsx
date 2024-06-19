import { API_KEY, API_URL, BASE_PATH, makeImagePath } from '../app/constants';
import styles from '../styles/movie-info.module.css';
import MovieSimilar from './movie-similar';

export async function getMovie(id: string) {
    // const response = await fetch(`${API_URL}/${id}`);
    const response = await fetch(
        `${BASE_PATH}/movie/${id}?append_to_response=credits&api_key=${API_KEY}&language=ko-KO&region=KR`
    );
    const json = await response.json();
    return json;
}
export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);

    return (
        <>
            <div
                className={styles.outer}
                style={{
                    backgroundImage: `url(${makeImagePath(movie.backdrop_path)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div className={styles.container}>
                <img
                    sizes="500px"
                    className={styles.poster}
                    src={makeImagePath(movie.poster_path)}
                    alt={movie.title}
                ></img>

                <div className={styles.info}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    {movie.tagline ? <h4>" {movie.tagline} "</h4> : null}
                    <div className={styles.genres}>
                        {movie.genres.map((gen) => (
                            <div className={styles.text} key={gen.id}>
                                {gen.name}
                            </div>
                        ))}
                    </div>
                    <h3>
                        ⭐{movie.vote_average.toFixed(1)}점 ◼ {movie.release_date} ◼ {movie.runtime}분
                    </h3>
                    <p>{movie.overview}</p>
                    <div className={styles.cast}>
                        <span>출연</span>
                        {movie.credits.cast.slice(0, 3).map((cast) => (
                            <p> {cast.name}</p>
                        ))}{' '}
                        {movie.credits.cast.length > 3 && <p>•••</p>}
                    </div>
                    <div className={styles.similar}>
                        <MovieSimilar id={id} />
                    </div>
                </div>
            </div>
        </>
    );
}
