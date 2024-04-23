import React, { ChangeEvent, FC, ReactElement, useState } from "react";
import _ from "lodash";

import RadioItem from "./RadioItem";

import { TQuestionRadio } from "../../../../types/types";
import { useAppDispatch } from "../../../../redux/hooks";
import { setUserAnswer } from "../../../../redux/userAnswersSlice";

type TRadioListProps = {
  question: TQuestionRadio;
};

const RadioList: FC<TRadioListProps> = ({ question }): ReactElement => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>): void => {
    const questionId = question.id;

    setSelectedOption(e.target.value);
    dispatch(setUserAnswer({ questionId, answer: e.target.value }));
  };

  return (
    <>
      {question.options.map((option, index) => (
        <RadioItem
          key={_.uniqueId()}
          option={option}
          index={index}
          isChecked={selectedOption === option}
          onChange={handleChangeAnswer}
        />
      ))}
    </>
  );
};

export default RadioList;
