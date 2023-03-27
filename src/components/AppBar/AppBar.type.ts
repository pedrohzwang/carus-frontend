import { ReactElement, ReactNode } from "react";

export interface AppBarProps {
  mainTitle: string;
  menus?: ReactNode[];
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
