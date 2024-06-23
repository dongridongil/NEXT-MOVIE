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
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getVideos(id);
            setVideos(response);
        };
        fetchData();
    }, []);

    if (videos.length === 0) {
        return <div className={styles.text}> 관련 데이터가 없습니다. </div>;
    }

    return (
        <div className={styles.container}>
            {videos.map((video) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ))}
        </div>
    );
};

export default MovieVideo;
