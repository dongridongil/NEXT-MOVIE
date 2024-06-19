import styles from '../../styles/home.module.css';
import Movie from '../../components/movie';
import { API_KEY, API_URL, BASE_PATH } from '../constants';

export const metadata = {
    title: 'Home',
};

async function getMovies() {
    const response = await fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&page=1&language=ko-KO&region=KR`);
    const json = await response.json();

    return json.results;
}
export default async function HomePage() {
    const movies = await getMovies();
    return <Movie movies={movies} />;
}
