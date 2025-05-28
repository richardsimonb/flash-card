import { useState } from "react";
import { ProgressBar } from "../ProgressBar";
import { Card } from "../Card";
import styles from "./styles.module.css";

const data = [
  {
    question: "forsen",
    answer: "insane",
  },
  {
    question: "lacari",
    answer: "bald",
  },
  {
    question: "gorgc",
    answer: "xddhah",
  }
]

export function FlashCard() {
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
    <>
      <h1>Flash Cards</h1>
      <div className={styles['flash-card']}>
        <ProgressBar current={currentIndex + 1} total={data.length} />
        <Card
          key={currentIndex}
          question={data[currentIndex].question}
          answer={data[currentIndex].answer}
          handleNext={handleNext}
          handlePrevious={handlePrevious} />
      </div>
    </>
  );
}