import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie/movie-info';

interface IParams {
    params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDeatil({ params: { id } }: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading Movie Info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
        </div>
    );
}
