import React, { ChangeEvent, FC, ReactElement } from "react";

import Label from "../../Label";
import OptionContainer from "../../OptionContainer";

type TRadioItemProps = {
  option: string;
  index: number;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RadioItem: FC<TRadioItemProps> = ({
  option,
  index,
  onChange,
  isChecked,
}): ReactElement => {
  return (
    <OptionContainer key={option}>
      <input
        type="radio"
        id={`option-${index}`}
        value={option}
        onChange={onChange}
        checked={isChecked}
      />
      <Label text={option} id={index} />
    </OptionContainer>
  );
};

export default RadioItem;
