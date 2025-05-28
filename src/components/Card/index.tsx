import { useState } from 'react';
import styles from './styles.module.css';

interface CardProps {
    question: string;
    answer: string;
    handleNext: () => void;
    handlePrevious: () => void;
}

export function Card({ question, answer, handleNext, handlePrevious }: CardProps) {

    const [showAnswer, setShowAnswer] = useState(false);

    function handleClick() {
        setShowAnswer(!showAnswer);
    }

    const hidden = {
        display: 'none',
    }
    return (
        <>
            <div className={styles['text-container']}>
                <p style={showAnswer ? hidden : undefined}>{question}</p>
                <p style={showAnswer ? undefined : hidden}>{answer}</p>
            </div>
            <div className={styles['button-container']}>
                <button onClick={handlePrevious}>&#60; Previous</button>
                <button onClick={handleClick}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
                <button onClick={handleNext}>Next &#62;</button>
            </div>

        </>
    );
}