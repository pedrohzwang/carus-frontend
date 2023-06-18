import { ReactElement, ReactNode } from "react";

export interface AppBarProps {
  mainTitle: ReactNode;
  menus?: AppBarMenuProps[];
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
  redirectOnTitle?: boolean
}

export interface AppBarMenuProps {
  component: ReactNode
  key: string
}