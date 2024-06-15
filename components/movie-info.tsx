import { API_URL } from '../app/(home)/page';

async function getMovies(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    const json = await response.json();
    return json;
}
export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovies(id);
    return <h1>{JSON.stringify(movie)}</h1>;
}
