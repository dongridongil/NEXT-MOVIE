'use client';

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaPlayCircle } from 'react-icons/fa';
import SeriesVideo from './series-videos';
import styles from '../styles/movie-modal.module.css';
import ReactDOM from 'react-dom';

const MovieModal = ({ id }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    if (!modalOpen) {
        return (
            <div className={styles.play} onClick={openModal}>
                <h3>PLAY</h3>
                <FaPlayCircle style={{ color: 'black', fontSize: '28px' }} />
            </div>
        );
    }

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.close} onClick={closeModal}>
                    &times;
                </div>
                <div className={styles.video}>
                    <SeriesVideo id={id} />
                </div>
            </div>
        </div>,
        document.body
    );
};

export default MovieModal;
