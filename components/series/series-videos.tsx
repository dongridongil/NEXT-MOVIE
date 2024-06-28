'use client';

import { useEffect, useState } from 'react';
import { API_URL, BASE_PATH, options } from '../../app/constants';
import styles from '../../styles/movie/movie-videos.module.css';

async function getVideos(id: string) {
    const response = await fetch(`${BASE_PATH}/tv/${id}/videos?language=ko`, options);
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
    console.log(videos, 'videos');
    return (
        <div className={styles.container}>
            {videos.map((video, idx) => {
                if (idx < 5) {
                    return (
                        <iframe
                            key={video.id}
                            src={`https://youtube.com/embed/${video.key}`}
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                            allowFullScreen
                        />
                    );
                }
            })}
        </div>
    );
};

export default MovieVideo;
