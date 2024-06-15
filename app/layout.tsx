// app/layout.tsx
import { ReactNode } from 'react';
import Navigation from '../components/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    );
}
