import { useState } from 'react';

interface CardProps {
    question: string;
    answer: string;
    handleNext: () => void;
    handlePrevious: () => void;
}

export function Card({question, answer, handleNext, handlePrevious}: CardProps) {

    const [showAnswer, setShowAnswer] = useState(false);

    function handleClick() {
        setShowAnswer(!showAnswer);
    }

    const hidden = {
        display: 'none',
    }
    return (
        <div className="card">
            <p style={showAnswer ? hidden : undefined}>{question}</p>
            <p style={showAnswer ? undefined : hidden}>{answer}</p>
            <button onClick={handlePrevious}>previous</button>
            <button onClick={handleClick}>show</button>
            <button onClick={handleNext}>next</button>
        </div>
    );
}