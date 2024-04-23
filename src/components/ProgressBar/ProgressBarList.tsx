import React, { type ReactElement } from "react";
import _ from "lodash";

import ProgressBarItem from "./ProgressBarItem";

import questions from "../../constants/questions";
import { useAppSelector } from "../../redux/hooks";

const ProgressBarList = (): ReactElement => {
  const { currentQuestionIndex } = useAppSelector((state) => state.test);
  const totalQuestions = questions.length;

  const renderProgressItems = (): ReactElement[] => {
    return Array.from({ length: totalQuestions }).map((_, index) => {
      const state =
        index < currentQuestionIndex
          ? "completed"
          : index === currentQuestionIndex
          ? "current"
          : "incomplete";
      return <ProgressBarItem state={state} key={index} />;
    });
  };

  return <div className="test__progress">{renderProgressItems()}</div>;
};

export default ProgressBarList;
