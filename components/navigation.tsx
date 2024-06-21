'use client';
import { PiTelevisionSimpleLight } from 'react-icons/pi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';
import { BiCameraMovie } from 'react-icons/bi';
import { PiTelevisionSimpleFill } from 'react-icons/pi';
import { useState } from 'react';
export default function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleLinkClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.container}>
            <Link href="/">
                <img src="/kdi3.png" alt="Logo" />
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li
                        className={activeIndex === 0 ? styles.list__active : styles.list}
                        onClick={() => handleLinkClick(0)}
                    >
                        <Link href="/" className={styles.a}>
                            <span className={styles.icon}>
                                <BiCameraMovie />
                            </span>
                            <span className={styles.text}>MOVIE</span>
                        </Link>
                    </li>
                    <li
                        className={activeIndex === 1 ? styles.list__active : styles.list}
                        onClick={() => handleLinkClick(1)}
                    >
                        <Link href="/series" className={styles.a}>
                            <span className={styles.icon}>
                                <PiTelevisionSimpleFill />
                            </span>
                            <span className={styles.text}>SERIES</span>
                        </Link>
                    </li>
                    <div className={styles.indicator} style={{ transform: `translateX(${activeIndex * 80}px)` }}></div>
                </ul>
            </nav>
        </div>
    );
}
