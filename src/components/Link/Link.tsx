import globalTheme from "../../theme/theme";
import { forwardRef } from "react";
import styled from "styled-components";
import { Link as ReactRouterDOMLink, LinkProps } from "react-router-dom";

const StyledLink: React.FC<LinkProps> = styled(ReactRouterDOMLink)`
  text-decoration: none;
  color: ${globalTheme.colors.font.light.c100};
`;

const Link = forwardRef<any, LinkProps>((props, ref) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
});

export default Link;
