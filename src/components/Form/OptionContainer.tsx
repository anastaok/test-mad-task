import React, { FC, ReactNode } from "react";

type TOptionContainerProps = {
  children: ReactNode;
};

const OptionContainer: FC<TOptionContainerProps> = ({ children }) => (
  <div className="option">{children}</div>
);

export default OptionContainer;
