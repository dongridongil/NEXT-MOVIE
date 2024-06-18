'use client';

import { API_URL } from '../app/constants';
import styles from '../styles/movie-similar.module.css';
//swiper 라이브러리
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

SwiperCore.use([Navigation, Pagination]);

async function getMovieSimilar(id: string) {
    const response = await fetch(`${API_URL}/${id}/similar`);
    const json = await response.json();
    return json;
}

const MovieSimilar = ({ id }: { id: string }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSimilar, setMovieSimilar] = useState([]);

    const openSimilar = async () => {
        const similarMovies = await getMovieSimilar(id);
        setMovieSimilar(similarMovies);
        setModalOpen(true);
    };

    return (
        <>
            <a className={styles.link} onClick={openSimilar}>
                Similar
            </a>
            <Modal
                isOpen={modalOpen}
                ariaHideApp={false}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setModalOpen(false)}
                contentLabel="Similar Movies"
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
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
                    {movieSimilar.map((similar) => (
                        <SwiperSlide key={similar.id}>
                            <img
                                key={similar.id}
                                className={styles.poster}
                                src={similar.poster_path}
                                alt={similar.title}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Modal>
        </>
    );
};

export default MovieSimilar;
