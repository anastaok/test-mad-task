import React, { type FC, type ReactElement } from "react";

import InputType from "./OptionTypes/InputType";
import TextareaType from "./OptionTypes/TextareaType";
import CheckboxList from "./OptionTypes/Checkbox/CheckboxList";
import RadioList from "./OptionTypes/Radio/RadioList";

import type { TQuestion } from "../../types/types";

type TQuestionListProps = {
  question: TQuestion;
};

const QuestionList: FC<TQuestionListProps> = ({ question }): ReactElement => {
  switch (question.type) {
    case "radio":
      return <RadioList question={question} />;
    case "checkbox":
      return <CheckboxList question={question} />;
    case "text":
      return <InputType question={question} />;
    case "textarea":
      return <TextareaType question={question} />;
  }
};

export default QuestionList;
