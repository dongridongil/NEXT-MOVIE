'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const path = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">{path === '/' ? 'Home ❤' : 'Home'}</Link>
                </li>
                <li>
                    <Link href="/about-us">{path === '/about-us' ? 'about-us ❤' : 'about-us'}</Link>
                </li>
            </ul>
        </nav>
    );
}
