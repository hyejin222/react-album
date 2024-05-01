import styles from './header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_logoBox}>
                <img className={styles.header_logoBox_logo} src="src/assets/images/image-logo.png" alt="logo" />
                <span className={styles.header_logoBox_title}>PhotoSplash</span>
            </div>
            <div className={styles.header_profileBox}>
                <button className={styles.header_profileBox_button}>사진제출</button>
                <button className={styles.header_profileBox_button}>북마크</button>
                <span className={styles.header_profileBox_userName}>hyejin.dev@gmail.com</span>
            </div>
        </header>
    );
}

export default Header;
