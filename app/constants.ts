export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';
export const API_KEY = 'fd38441e414947980f6caa7de48cb86b';
export const BASE_PATH = 'https://api.themoviedb.org/3';
export function makeImagePath(id: string, format?: string) {
    const IMG_BASE_PATH = 'https://image.tmdb.org/t/p/';
    return `${IMG_BASE_PATH}${format ? format : 'original'}/${id}`;
}

export const TOKKEN =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFlZmRiZTc3YWIzNWIzYzNjMGY5YThmYTM0ZTc4OSIsInN1YiI6IjY2MWU0YjMyOTY2NzBlMDE2M2Q4Y2MxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5a3XfKkQzt9NUZ6nZokIbGFT6AGHJhpERDYGJ6HYtGs';
export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: TOKKEN,
    },
};
