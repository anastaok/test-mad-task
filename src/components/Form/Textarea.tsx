import React, { FC } from "react";

type TTextareaProps = {
  id: string | number;
};

const Textarea: FC<TTextareaProps> = ({ id: formItemId }) => (
  <textarea id={`option-${formItemId}`} />
);

export default Textarea;
