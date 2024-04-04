import styles from '@/styles/pages/Home/Main.module.scss';

import DownloadButton from '@/components/links/DownloadButton';
import Container from '@/components/layout/Container';
import Img from '@/components/utils/Img';

import Image from '@/assets/home/program.svg';
import Me from '@/assets/home/me.jpg';

export default function Main() {
    return (
        <main className={`${styles.main}`} id="home">
            <Container>
                <div className={styles.main_container}>
                    <div className={styles.main_image}>
                        <div className={styles.image}>
                            <Img
                                src={Me}
                                style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
                            />
                        </div>
                    </div>

                    <div className={styles.main_info}>
                        <div className={styles.info}>
                            <div className={styles.info_title}>
                                <h1>
                                    Olá, eu sou
                                    <div className={styles.words}>
                                        <span>Size</span>
                                        <span>André Siboli.</span>
                                        <span>Web Developer.</span>
                                    </div>
                                </h1>
                            </div>
                            <div className={styles.info_description}>
                                <p>
                                    Olá, meu nome é André. Tenho 21 anos. Sou graduado em{' '}
                                    <span>Análise e Desenvolvimento de Sistemas</span> pela{' '}
                                    <span>Cruzeiro do Sul</span>. Desde de criança eu sou apaixonado
                                    por tecnologia. Sempre me perguntava como certas coisas
                                    acontecia por trás dos panos e isso fez meu interesse aumentar
                                    cada vez mais.
                                </p>
                            </div>
                            <div className={styles.info_download}>
                                <DownloadButton
                                    archive={'./curriculo.pdf'}
                                    content="Baixar Currículo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
