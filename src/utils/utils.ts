import { NavigateFunction } from "react-router-dom";

export const redirectTo = ({
  navigate,
  path,
}: {
  navigate: NavigateFunction;
  path: string;
}) => {
  navigate(path);
};
