import React, { FC, ReactElement } from "react";

type TLabelProps = {
  text: string;
  id: string | number;
};

const Label: FC<TLabelProps> = ({ text, id }): ReactElement => (
  <label htmlFor={`option-${id}`}>{text}</label>
);

export default Label;
