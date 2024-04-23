import React, { ChangeEvent, FC, ReactElement, useState } from "react";

import OptionContainer from "../OptionContainer";
import Label from "../Label";

import { TQuestionTextarea } from "../../../types/types";
import { useAppDispatch } from "../../../redux/hooks";
import { setUserAnswer } from "../../../redux/userAnswersSlice";

type TTextareaListProps = {
  question: TQuestionTextarea;
};

const TextareaType: FC<TTextareaListProps> = ({ question }): ReactElement => {
  const [textareaValue, setTextareaValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleTextareaChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const trimmedValue = event.target.value.trim();
    setTextareaValue(trimmedValue);
    dispatch(setUserAnswer({ questionId: question.id, answer: trimmedValue }));
  };

  return (
    <OptionContainer key={question.id}>
      <textarea
        id={`option-${question.id}`}
        value={textareaValue}
        onChange={handleTextareaChange}
      />
      <Label text="" id={question.id} />
    </OptionContainer>
  );
};

export default TextareaType;
