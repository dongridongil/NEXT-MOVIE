'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';
export default function Navigation() {
    const path = usePathname();

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <Link href="/">MOVIE</Link> {path === '/' ? '🔥' : ''}
                    </li>
                    <li>
                        <Link href="/series">SERIES</Link>
                        {path === '/series' ? '🔥' : ''}
                    </li>
                </ul>
            </nav>
        </div>
    );
}
