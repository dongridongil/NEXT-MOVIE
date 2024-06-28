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
import styles from '../../styles/series/series.module.css';
import { useRouter } from 'next/navigation';
import { makeImagePath } from '../../app/constants';

interface ISeries {
    id: string;
    name: string;
    poster_path: string;
    backdrop_path: string;
    first_air_date: string;
    overview: string;
}
interface ISeriesProps {
    series: ISeries[];
}

const Series = ({ series }: ISeriesProps) => {
    const router = useRouter();
    const onClick = (id: string) => {
        router.push(`/series/${id}`);
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
                initialSlide={4} //시작 부분
                loop={true} // 무한 반복
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
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
            >
                {series.map((tv) => (
                    <SwiperSlide className={styles.swiperContainer} key={tv.id}>
                        <Link prefetch href={`/series/${tv.id}`}>
                            <img
                                className={styles.poster}
                                src={makeImagePath(tv.backdrop_path)}
                                alt={tv.name}
                                onClick={() => onClick(tv.id)}
                            />
                            <div className={styles.desc}>
                                <h2 className={styles.h2}>{tv.name}</h2>
                                <p className={styles.release}>첫 방송 : {tv.first_air_date}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Series;
