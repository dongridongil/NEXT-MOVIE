import { Suspense } from 'react';

import SeriesInfo, { getSeries } from '../../../../components/series-info';

interface IParams {
    params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
    const series = await getSeries(id);
    return {
        title: series.name,
    };
}

export default async function SeriesDetail({ params: { id } }: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading Series Info</h1>}>
                <SeriesInfo id={id} />
            </Suspense>
        </div>
    );
}
