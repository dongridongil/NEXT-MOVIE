import { API_KEY, API_URL, BASE_PATH } from '../../constants';
import Series from '../../../components/series';

export const metadata = {
    title: 'Home',
};

async function getSeries() {
    const response = await fetch(`${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&language=ko-KO&region=KR`);
    const json = await response.json();

    return json.results;
}

export default async function HomePage() {
    const series = await getSeries();

    return (
        <>
            <Series series={series} />
        </>
    );
}
