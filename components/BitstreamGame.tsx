"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import styles from "../styles/BitstreamGame.module.css";
import homeStyles from "../styles/Home.module.css";

type QuizQuestion = {
  expression: string;
  answer: number;
};

const CONFETTI_COUNT = 18;

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const createQuestion = (): QuizQuestion => {
  const template = randomInt(0, 5);

  switch (template) {
    case 0: {
      const a = randomInt(3, 12);
      const b = randomInt(2, 11);
      return {
        expression: `${a} > ${b} ? ${a} - ${b} : ${b} - ${a}`,
        answer: a > b ? a - b : b - a
      };
    }
    case 1: {
      const a = randomInt(3, 12);
      const b = randomInt(2, 9);
      const c = randomInt(2, 9);
      return {
        expression: `${a} % 2 === 0 ? ${b} + ${c} : ${b} * 2`,
        answer: a % 2 === 0 ? b + c : b * 2
      };
    }
    case 2: {
      const a = randomInt(2, 9);
      const b = randomInt(2, 9);
      const c = randomInt(b + 1, b + 6);
      return {
        expression: `(${a} > ${b} && ${b} < ${c}) ? ${a} + ${c} : ${b} + ${c}`,
        answer: a > b && b < c ? a + c : b + c
      };
    }
    case 3: {
      const a = randomInt(2, 9);
      const b = randomInt(2, 9);
      const c = randomInt(b, b + 6);
      return {
        expression: `(${a} < ${b} || ${c} === ${a}) ? ${c} - ${b} : ${a} + ${b}`,
        answer: a < b || c === a ? c - b : a + b
      };
    }
    case 4: {
      const a = randomInt(2, 9);
      const b = randomInt(2, 9);
      const c = randomInt(2, 9);
      return {
        expression: `${a} === ${b} ? ${a} * ${c} : ${b} + ${c}`,
        answer: a === b ? a * c : b + c
      };
    }
    default: {
      const a = randomInt(2, 9);
      const b = randomInt(2, 9);
      const c = randomInt(1, 5);
      return {
        expression: `!(${a} > ${b}) ? ${b} + ${c} : ${a} + ${c}`,
        answer: !(a > b) ? b + c : a + c
      };
    }
  }
};

export default function BitstreamGame() {
  const [question, setQuestion] = useState<QuizQuestion>(createQuestion);
  const [answerInput, setAnswerInput] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(0);

  const rotateQuestion = useCallback(() => {
    setQuestion(createQuestion());
    setAnswerInput("");
    setHasAnswered(false);
    setIsInvalid(false);
  }, []);

  useEffect(() => {
    if (!hasAnswered) {
      return;
    }

    const timeout = window.setTimeout(() => {
      rotateQuestion();
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [hasAnswered, rotateQuestion]);

  useEffect(() => {
    if (!showConfetti) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setShowConfetti(false);
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, [showConfetti]);

  const handleCheck = () => {
    if (hasAnswered) {
      return;
    }

    const trimmed = answerInput.trim();
    const parsed = Number(trimmed);

    if (!trimmed || Number.isNaN(parsed)) {
      setIsInvalid(true);
      return;
    }

    if (parsed === question.answer) {
      setCorrect((prev) => prev + 1);
      setConfettiBurst((prev) => prev + 1);
      setShowConfetti(true);
    } else {
      setIncorrect((prev) => prev + 1);
    }

    setHasAnswered(true);
  };

  const handleReset = () => {
    rotateQuestion();
    setCorrect(0);
    setIncorrect(0);
  };

  return (
    <div className={styles.gameBlock}>
      <div className={`glass-panel ${styles.gameCard}`}>
        {showConfetti && (
          <div
            key={`confetti-${confettiBurst}`}
            className={styles.confetti}
            aria-hidden="true"
          >
            {Array.from({ length: CONFETTI_COUNT }).map((_, index) => {
              const left = (index * 11) % 100;
              const delay = (index % 6) * 0.08;
              const size = 6 + (index % 3) * 2;
              const height = size * 1.6;
              const spin = (index * 27) % 360;

              return (
                <span
                  key={`confetti-piece-${index}`}
                  className={styles.confettiPiece}
                  style={
                    {
                      "--x": `${left}%`,
                      "--delay": `${delay}s`,
                      "--size": `${size}px`,
                      "--height": `${height}px`,
                      "--spin": `${spin}deg`
                    } as CSSProperties
                  }
                />
              );
            })}
          </div>
        )}
        <div className={styles.gameIntro}>
          <p className={homeStyles.label}>Mini Game</p>
          <h3 className={styles.gameTitle}>JavaScript Math Quiz</h3>
        </div>
        <div className={styles.gameConsole}>
          <div className={styles.consoleHeader}>
            <span className={styles.gameTag}>JavaScript Expression</span>
          </div>
          <div className={styles.expressionCard} aria-live="polite">
            <span className={styles.exprKeyword}>const</span>
            <span className={styles.exprVar}>result</span>
            <span className={styles.exprOp}>=</span>
            <span className={styles.exprBody}>{question.expression}</span>
            <span className={styles.exprOp}>;</span>
          </div>
          <div className={styles.answerRow}>
            <label className={styles.answerLabel} htmlFor="math-answer">
              Answer
            </label>
            <input
              id="math-answer"
              className={styles.answerInput}
              type="text"
              inputMode="numeric"
              placeholder="0"
              value={answerInput}
              onChange={(event) => {
                setAnswerInput(event.target.value);
                if (isInvalid) {
                  setIsInvalid(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleCheck();
                }
              }}
              disabled={hasAnswered}
              aria-invalid={isInvalid}
              aria-label="Enter the answer"
            />
            <button
              type="button"
              className={styles.submitButton}
              onClick={handleCheck}
              disabled={hasAnswered}
            >
              Check
            </button>
          </div>
        </div>
        <div className={styles.gameStats}>
          <div className={styles.scoreLine}>Correct: {correct}</div>
          <div className={styles.scoreLine}>Incorrect: {incorrect}</div>
          <button
            type="button"
            className={styles.resetButton}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
