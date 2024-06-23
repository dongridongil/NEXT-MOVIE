'use client';

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaPlayCircle } from 'react-icons/fa';
import MovieVideo from './movie-videos';
import styles from '../styles/movie-modal.module.css';

const MovieModal = ({ id }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {modalOpen ? (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.close} onClick={closeModal}>
                            &times;
                        </div>
                        <div className={styles.video}>
                            <MovieVideo id={id} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.play} onClick={openModal}>
                    <h3>PLAY</h3>
                    <FaPlayCircle style={{ color: 'black', fontSize: '28px' }} />
                </div>
            )}
        </>
    );
};

export default MovieModal;
