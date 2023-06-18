import styled, { css } from "styled-components";
import {
  Text as MText,
  TextProps as MTextProps,
  useMantineTheme,
} from "@mantine/core";
import { StyledTextProps } from "./Text.type";

const StyledText: React.FC<StyledTextProps> = styled(MText)`
  ${(props: MTextProps) => {
    // TODO: ALTERAR PARA PEGAR DO TEMA E NÃO FIXO
    return css`
      color: black;
    `;
  }}
`;

export function Text(props: MTextProps) {
  const theme = useMantineTheme();

  return (
    <StyledText {...props} theme={theme}>
      {props.children}
    </StyledText>
  );
}
