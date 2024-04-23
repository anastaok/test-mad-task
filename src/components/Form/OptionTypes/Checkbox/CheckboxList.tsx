import React, { ChangeEvent, FC, useState } from "react";
import _ from "lodash";

import CheckboxItem from "./CheckboxItem";

import type { TQuestionCheckbox } from "../../../../types/types";
import { useAppDispatch } from "../../../../redux/hooks";
import { setUserAnswer } from "../../../../redux/userAnswersSlice";

type TCheckboxListProps = {
  question: TQuestionCheckbox;
};

const CheckboxList: FC<TCheckboxListProps> = ({
  question: { id, options },
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const option = event.target.value;
    const isSelected = selected.includes(option);
    const newSelection = isSelected
      ? selected.filter((item) => item !== option)
      : [...selected, option];

    setSelected(newSelection);
    dispatch(setUserAnswer({ questionId: id, answer: newSelection.sort() }));
  };

  return (
    <>
      {options.map((option, index) => (
        <CheckboxItem
          key={index}
          onChange={handleChange}
          option={option}
          index={index}
          isChecked={selected.includes(option)}
        />
      ))}
    </>
  );
};

export default CheckboxList;
