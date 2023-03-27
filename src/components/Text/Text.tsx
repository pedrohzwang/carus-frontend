import { Text as GrommetText, TextExtendedProps } from "grommet";
import styled from "styled-components";
import globalTheme from "../../theme/theme";

const StyledText: React.FC<TextExtendedProps> = styled(GrommetText)`
  color: ${globalTheme.colors.font.light.c100};
`;

function Text(props: TextExtendedProps) {
  return <StyledText {...props}>{props.children}</StyledText>;
}

export default Text;
