'use client';

import { API_URL } from '../../app/constants';
import styles from '../../styles/movie/movie-similar.module.css';
//swiper 라이브러리
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Autoplay]);

async function getMovieSimilar(id: string) {
    const response = await fetch(`${API_URL}/${id}/similar`);
    const json = await response.json();
    return json;
}

const MovieSimilar = async ({ id }: { id: string }) => {
    const movieSimilar = await getMovieSimilar(id);

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
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, // 사용자 만진 후에도 자동 전환 유지
                }}
            >
                {movieSimilar
                    .filter((item) => item.poster_path)
                    .map((similar) => (
                        <SwiperSlide key={similar.id}>
                            <Link href={`/movies/${similar.id}`}>
                                <div className={styles.poster}>
                                    <img src={similar.poster_path} alt={similar.title} />
                                    <div className={styles.h2}>
                                        <h2>{similar.title}</h2>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
};

export default MovieSimilar;
