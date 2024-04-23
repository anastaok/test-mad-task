type TQuestionRadio = {
  id: number;
  title: string;
  type: "radio";
  correct: number;
  options: string[];
};

type TQuestionCheckbox = {
  id: number;
  title: string;
  type: "checkbox";
  correct: number[];
  options: string[];
};

type TQuestionText = {
  id: number;
  title: string;
  type: "text";
  correct: string[];
};

type TQuestionTextarea = {
  id: number;
  title: string;
  type: "textarea";
  correct: string;
};

type TQuestion =
  | TQuestionRadio
  | TQuestionCheckbox
  | TQuestionText
  | TQuestionTextarea;

export type {
  TQuestion,
  TQuestionRadio,
  TQuestionCheckbox,
  TQuestionText,
  TQuestionTextarea,
};
