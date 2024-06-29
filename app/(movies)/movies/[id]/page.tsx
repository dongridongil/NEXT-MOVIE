import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie/movie-info';
import Loading from '../../../(home)/loading';

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
            <Suspense fallback={<Loading />}>
                <MovieInfo id={id} />
            </Suspense>
        </div>
    );
}
