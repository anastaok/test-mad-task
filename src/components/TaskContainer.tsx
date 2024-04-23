import { useEffect, ReactElement } from "react";
import { useTimer } from "react-timer-hook";

import Form from "./Form/Form";
import ProgressBarList from "./ProgressBar/ProgressBarList";
import Result from "./Result";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateTime } from "../redux/testSlice";
import questions from "../constants/questions";

export const TaskContainer: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const currentQuestionIndex = useAppSelector(
    (state) => state.test.currentQuestionIndex
  );
  const { timeRemaining } = useAppSelector((state) => state.test);

  const hasNextQuestion = currentQuestionIndex < questions.length;

  const time = new Date();
  time.setSeconds(time.getSeconds() + timeRemaining);

  const { minutes, seconds, isRunning, pause } = useTimer({
    expiryTimestamp: time,
  });

  useEffect(() => {
    dispatch(updateTime(minutes * 60 + seconds));
  }, [minutes, seconds]);

  return (
    <div className="container test">
      <div className="test__header">
        <p className="question">Ответьте на вопросы:</p>
        <div>
          {timeRemaining === 0 ? (
            <h3 className="timeEnd">время истекло!</h3>
          ) : (
            <div className="timer">
              {minutes} : {seconds.toString().padStart(2, "0")}
            </div>
          )}
        </div>
      </div>
      <ProgressBarList />
      {hasNextQuestion && isRunning && timeRemaining !== 0 ? (
        <Form />
      ) : (
        <Result pauseTimer={pause} />
      )}
    </div>
  );
};
