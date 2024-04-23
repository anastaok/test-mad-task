import React, { FC } from "react";

type TProgressBarItemProps = {
  state: "completed" | "current" | "incomplete";
};

const ProgressBarItem: FC<TProgressBarItemProps> = ({
  state: progressState,
}) => <div className={`test__progress-${progressState}`} />;

export default ProgressBarItem;
