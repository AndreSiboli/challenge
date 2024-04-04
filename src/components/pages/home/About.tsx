import styles from '@/styles/pages/Home/About.module.scss';

import Container from '@/components/layout/Container';

export default function About() {
    return (
        <section className={`${styles.about}`} id="about">
            <Container>
                <div className={styles.about_container}>
                    <div className={styles.about_info}>
                        <div className={styles.info_title}>
                            <h2>Meus interesses</h2>
                        </div>

                        <div className={styles.info_content}>
                            <p>
                                Meus interesses com a Adejo é ingressar o time. Não só para fazer
                                parte do desenvolvimento de aplicações, mas para também fazerem
                                parte do meu desenvolvimento como profissional. Seria uma troca
                                mútua de conhecimentos.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
