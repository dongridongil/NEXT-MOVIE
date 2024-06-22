'use client';

import { API_URL, BASE_PATH, makeImagePath, options } from '../app/constants';
import styles from '../styles/movie-similar.module.css';
//swiper 라이브러리
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination]);

async function getSeriesSimilar(id: string) {
    const response = await fetch(`${BASE_PATH}/tv/${id}/similar?language=ko&region=KR`, options);
    const { results } = await response.json();
    return results;
}

const SeriesSimilar = async ({ id }: { id: string }) => {
    const SeriesSimilar = await getSeriesSimilar(id);

    return (
        <>
            <div className={styles.title}>비슷한 영화</div>

            <Swiper
                spaceBetween={20} // 슬라이더 간격
                slidesPerView={6} // 슬라이더 개수
                centeredSlides={true} //슬라이더가 항상 중앙에위치하게
                centerInsufficientSlides={true} // 슬라이드 수가 slidesPerView보다 적을 경우에도 슬라이드가 중앙에 배치
                navigation // 슬라이더 prev,next
                pagination={{ clickable: true }}
                initialSlide={3}
                className={styles.swiperContainer}
            >
                {SeriesSimilar.filter((item) => item.poster_path).map((similar) => (
                    <SwiperSlide key={similar.id}>
                        <Link href={`/series/${similar.id}`}>
                            <img
                                key={similar.id}
                                className={styles.poster}
                                src={makeImagePath(similar.poster_path)}
                                alt={similar.title}
                            />
                            <h2>{similar.title}</h2>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SeriesSimilar;
