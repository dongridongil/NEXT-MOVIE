'use client';

//swiper 라이브러리
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';
import { makeImagePath } from '../app/constants';

interface IMovie {
    id: string;
    title: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    overview: string;
}

interface IMovieProps {
    movies: IMovie[];
}
const Movie = ({ movies }: IMovieProps) => {
    const router = useRouter();
    const onClick = (id: string) => {
        router.push(`/movies/${id}`);
    };

    return (
        <div className={styles.container}>
            <Swiper
                spaceBetween={20} // 슬라이더 간격
                slidesPerView={2} // 슬라이더 개수(3개를 보이게하려면 2.5가 맞음)
                centeredSlides={true} //슬라이더가 항상 중앙에위치하게
                centerInsufficientSlides={true} // 슬라이드 수가 slidesPerView보다 적을 경우에도 슬라이드가 중앙에 배치
                navigation // 슬라이더 prev,next
                pagination={{ clickable: true }}
                initialSlide={1}
                className={styles.swiperContainer}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 30, // 회전 각도
                    stretch: 0, // 슬라이드 간의 간격 조정
                    depth: 200, // 입체 효과의 깊이
                    modifier: 1.5, // 슬라이드 사이의 거리
                    slideShadows: true, // 슬라이드 그림자
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, // 사용자 만진 후에도 자동 전환 유지
                }}
            >
                {movies.map((movie) => (
                    <SwiperSlide className={styles.swiperContainer} key={movie.id}>
                        <img
                            className={styles.poster}
                            src={makeImagePath(movie.backdrop_path)}
                            alt={movie.title}
                            onClick={() => onClick(movie.id)}
                        />
                        <h2 className={styles.h2}>{movie.title}</h2>
                        <p className={styles.release}>개봉일 : {movie.release_date}</p>
                        <Link prefetch href={`/movies/${movie.id}`}></Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Movie;
