import { API_URL } from '../app/(home)/page';

async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = await response.json();
    return json;
}

export default async function MovieVideo({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}
