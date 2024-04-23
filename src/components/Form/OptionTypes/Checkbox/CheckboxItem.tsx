import React, { ChangeEvent, FC, ReactElement } from "react";

import Label from "../../Label";
import OptionContainer from "../../OptionContainer";

type TCheckboxItemProps = {
  option: string;
  index: number;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxItem: FC<TCheckboxItemProps> = ({
  option,
  index,
  onChange,
  isChecked,
}): ReactElement => {
  return (
    <OptionContainer key={option}>
      <input
        type="checkbox"
        id={`option-${index}`}
        value={option}
        onChange={onChange}
        checked={isChecked}
        className="custom-checkbox"
      />
      <Label text={option} id={index} />
    </OptionContainer>
  );
};

export default CheckboxItem;
