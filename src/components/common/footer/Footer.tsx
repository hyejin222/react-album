import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.pagination}>
                <button className={styles.pagination_button}>
                    <img src="src/assets/icons/icon-arrowLeft.svg" alt="icon arrow left" />
                </button>
                {/* 변경될 UI 부분 */}
                <span>1</span>
                <button className={styles.pagination_button}>
                    <img src="src/assets/icons/icon-arrowRight.svg" alt="icon arrow right" />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
