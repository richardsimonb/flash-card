import styles from './styles.module.css';

export function ProgressBar() {
    return (
        <div className={styles.bar}>
            <div className={styles.progress} />
            <p className={styles.text}>10%</p>
            <p className={styles['text-right']}>10 of 100</p>
        </div>
    );
}