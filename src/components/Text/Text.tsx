import { Text as GrommetText, TextExtendedProps } from "grommet";
import styled, { css } from "styled-components";
import globalTheme from "../../theme/theme";

const StyledText: React.FC<TextExtendedProps> = styled(GrommetText)`
  ${(props: TextExtendedProps) => {
    return css`
      color: ${props.color ? props.color : globalTheme.colors.font.light.c100};
    `;
  }}
`;

function Text(props: TextExtendedProps) {
  return <StyledText {...props}>{props.children}</StyledText>;
}

export default Text;
