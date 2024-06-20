import { API_KEY, API_URL, BASE_PATH, makeImagePath } from '../app/constants';
import styles from '../styles/series-info.module.css';
import SeriesSimilar from './series-similar';

export async function getSeries(id: string) {
    // const response = await fetch(`${API_URL}/${id}`);
    const response = await fetch(
        `${BASE_PATH}/tv/${id}?append_to_response=credits&api_key=${API_KEY}&language=ko-KO&region=KR`
    );
    const json = await response.json();
    return json;
}
export default async function SeriesInfo({ id }: { id: string }) {
    const Series = await getSeries(id);

    return (
        <>
            <div
                className={styles.outer}
                style={{
                    backgroundImage: `url(${makeImagePath(Series.backdrop_path)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div className={styles.container}>
                <img
                    sizes="500px"
                    className={styles.poster}
                    src={Series.poster_path ? makeImagePath(Series.poster_path) : '/noData.png'}
                    alt={Series.title}
                ></img>

                <div className={styles.info}>
                    <h1 className={styles.title}>{Series.name}</h1>
                    {Series.tagline ? <h4>" {Series.tagline} "</h4> : null}
                    {Series.genres && Series.genres.length > 0 && (
                        <div className={styles.genres}>
                            {Series.genres.map((gen) => (
                                <div className={styles.text} key={gen.id}>
                                    {gen.name}
                                </div>
                            ))}
                        </div>
                    )}
                    <h3>
                        ⭐{Series.vote_average ? Series.vote_average.toFixed(1) : 0}점 ◼ 방영일 {Series.last_air_date} ◼{' '}
                        {Series.episode_run_time}분
                    </h3>
                    <p>{Series.overview}</p>
                    {Series.credits && Series.credits.cast && Series.credits.cast.length > 0 && (
                        <div className={styles.cast}>
                            <span>출연</span>
                            {Series.credits.cast.slice(0, 3).map((cast) => (
                                <p key={cast.id}> {cast.name}</p>
                            ))}
                            {Series.credits.cast.length > 3 && <p key="more">•••</p>}
                        </div>
                    )}
                    <div className={styles.similar}>
                        <SeriesSimilar id={id} />
                    </div>
                </div>
            </div>
        </>
    );
}
