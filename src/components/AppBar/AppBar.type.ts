import { ReactElement } from "react";

export interface AppBarProps {
  mainTitle: string;
  menus?: string[];
  rightMenu?: boolean;
  children?: ReactElement;
  height?:
    | string
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
  titleSize?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
}
