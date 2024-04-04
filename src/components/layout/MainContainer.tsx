import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import Navbar from '@/components/bars/Navbar/Index';
import Footer from '@/components/bars/Footer';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function MainContainer({ children }: { children: ReactNode }) {
    return (
        <div className={`${inter.className}`}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
