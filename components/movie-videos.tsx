'use client';

import { useEffect, useState } from 'react';
import { API_URL, BASE_PATH, options } from '../app/constants';
import styles from '../styles/movie-videos.module.css';

async function getVideos(id: string) {
    const response = await fetch(`${BASE_PATH}/movie/${id}/videos?language=ko`, options);
    const { results } = await response.json();

    return results;
}

const MovieVideo = ({ id }: { id: string }) => {
    const [videoKey, setVideoKey] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getVideos(id);
            if (response.length > 0) {
                setVideoKey(response[0].key);
            }
        };
        fetchData();
    }, [id]);

    if (!videoKey) {
        return <div className={styles.text}> 관련 데이터가 없습니다. </div>;
    }

    return (
        <div className={styles.container}>
            <iframe
                src={`https://youtube.com/embed/${videoKey}`}
                title="Movie Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default MovieVideo;
