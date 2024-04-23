import React, { ChangeEvent, FC, ReactElement, useState } from "react";

import Label from "../Label";

import OptionContainer from "../OptionContainer";
import { TQuestionText } from "../../../types/types";
import { useAppDispatch } from "../../../redux/hooks";
import { setUserAnswer } from "../../../redux/userAnswersSlice";

type TInputListProps = {
  question: TQuestionText;
};

const InputType: FC<TInputListProps> = ({ question }): ReactElement => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const trimmedValue = event.target.value.trim();
    setInputValue(trimmedValue);
    dispatch(setUserAnswer({ questionId: question.id, answer: trimmedValue }));
  };

  return (
    <OptionContainer key={question.id}>
      <input
        type="text"
        id={`option-${question.id}`}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Label text="" id={question.id} />
    </OptionContainer>
  );
};

export default InputType;
