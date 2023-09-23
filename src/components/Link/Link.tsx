import { forwardRef } from "react";
import styled from "styled-components";
import { Link as ReactRouterDOMLink, LinkProps } from "react-router-dom";
import { useMantineTheme } from "@mantine/core";
import { CLinkProps } from "./Link.type";

const StyledLink = styled(ReactRouterDOMLink)<CLinkProps>`
  ${({ theme }: CLinkProps) => `
      text-decoration: none;
      color: ${theme.colors.text}
  `}
`;

export const Link = forwardRef<any, LinkProps>((props, ref) => {
  const theme = useMantineTheme();

  return (
    <StyledLink {...props} ref={ref} theme={theme}>
      {props.children}
    </StyledLink>
  );
});
