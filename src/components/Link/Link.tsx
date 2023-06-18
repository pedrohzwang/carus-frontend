import { forwardRef } from "react";
import styled from "styled-components";
import { Link as ReactRouterDOMLink, LinkProps } from "react-router-dom";

const StyledLink: React.FC<LinkProps> = styled(ReactRouterDOMLink)`
  text-decoration: none;
  // TODO: AJUSTAR PARA USAR NOVO TEMA
  color: black;
`;

export const Link = forwardRef<any, LinkProps>((props, ref) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
});

