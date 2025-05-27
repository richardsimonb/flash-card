import styles from './styles.module.css';

interface ProgressBarProps {
    current: number;
    total: number;
}

export function ProgressBar({current, total}: ProgressBarProps) {
    const progressPercentage = Math.round((current / total) * 100);
    const progressStyle = {
        width: `${progressPercentage}%`,
    };
    return (
        <div className={styles.bar}>
            <div className={styles.progress} style={progressStyle}/>
            <p className={styles.text}>{progressPercentage}%</p>
            <p className={styles['text-right']}>{current} of {total}</p>
        </div>
    );
}