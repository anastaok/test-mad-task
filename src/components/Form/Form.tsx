import React, { FormEvent, ReactElement } from "react";

import QuestionList from "./QuestionList";

import questions from "../../constants/questions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateCurrentQuestionIndex } from "../../redux/testSlice";

const Form = (): ReactElement => {
  const { currentQuestionIndex } = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();
  const question = questions[currentQuestionIndex];

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(updateCurrentQuestionIndex());
  };

  return (
    <form className="test__form" onSubmit={handleSubmit}>
      <h2 className="test__question-name">{question.title}</h2>
      <QuestionList question={question} />
      <button type="submit" className="btn">
        Ответить
      </button>
    </form>
  );
};

export default Form;
