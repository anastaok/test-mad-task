import React, { type FC, type ReactElement, useEffect } from "react";
import _ from "lodash";

import { resetTest } from "../redux/testSlice";
import { clearUserAnswers } from "../redux/userAnswersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import questions from "../constants/questions";

type TResultProps = {
  pauseTimer: () => void;
};

const Result: FC<TResultProps> = ({ pauseTimer }): ReactElement => {
  const userAnswers = useAppSelector((state) => state.userAnswers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    pauseTimer();
  }, []);

  const calculateCorrectAnswers = (): number => {
    let correctAnswers = 0;

    questions.forEach((question) => {
      const correctAnswer = question.correct;
      const userAnswer = userAnswers[question.id];

      if (_.isEqual(correctAnswer, userAnswer)) {
        correctAnswers += 1;
      }
    });

    return correctAnswers;
  };

  const correctCount = calculateCorrectAnswers();

  const handleRestartTest = (): void => {
    dispatch(clearUserAnswers());
    dispatch(resetTest());
    window.location.reload();
  };

  return (
    <div className="test__result">
      <h2>Результат тестирования</h2>
      <p className="сorrectСount">
        {correctCount} из {questions.length}
      </p>
      <button onClick={handleRestartTest} className="btn">
        ПЕРЕЗАПУСТИТЬ
      </button>
    </div>
  );
};

export default Result;
