import styles from '@/styles/Home.module.scss';

import Head from 'next/head';
import Main from '@/components/pages/home/Main';
import About from '@/components/pages/home/About';

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Home</title>
                <meta name="description" content="Portfolio test" />
                <meta name="author" content="André Siboli" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <Main />
            <About />
        </>
    );
}
