import { useState } from "react";
import { ProgressBar } from "../ProgressBar";
import { Card } from "../Card";
import styles from "./styles.module.css";

interface FlashCard{
  question: string;
  answer: string;
}

type FlashCardProps = {
  title: string;
  data: FlashCard[];
}

export function FlashCard({title, data}: FlashCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    if (currentIndex >= data.length - 1) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };
  function handlePrevious() {
    if (currentIndex <= 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className={styles['flash-card-container']}>
      <h1>{title}</h1>
      <div className={styles['flash-card']}>
        <ProgressBar current={currentIndex + 1} total={data.length} />
        <Card
          key={currentIndex}
          question={data[currentIndex].question}
          answer={data[currentIndex].answer}
          handleNext={handleNext}
          handlePrevious={handlePrevious} />
      </div>
    </div>
  );
}