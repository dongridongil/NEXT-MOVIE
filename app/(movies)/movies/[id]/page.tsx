import { Suspense } from 'react';
import { API_URL } from '../../../(home)/page';
import MovieInfo from '../../../../components/movie-info';
import MovieVideo from '../../../../components/movie-videos';

export default async function MovieDeatil({ params: { id } }: { params: { id: string } }) {
    return (
        <div>
            <Suspense fallback={<h1>Loading Movie Info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Movie Video</h1>}>
                <MovieVideo id={id} />
            </Suspense>
        </div>
    );
}
