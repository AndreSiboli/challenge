import styles from '@/styles/bars/Footer.module.scss';

import Container from '@/components/layout/Container';

export default function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <Container>
                <div className={styles.footer_copyright}>
                    <p>Copyright &copy; {new Date().getFullYear()} Feito por André Siboli.</p>
                </div>
            </Container>
        </footer>
    );
}
