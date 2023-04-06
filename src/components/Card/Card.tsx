import { Box } from "grommet";
import globalTheme from "../../theme/theme";
import { CardProps } from "./CardProps.type";
import styled, { css } from "styled-components";

const StyledCard: React.FC<CardProps> = styled(Box)`
  ${(props: CardProps) => {
    return css`
      border: ${props.border
        ? `${globalTheme.patterns.border.size.small} solid ${props.borderColor}`
        : "none"};
      border-radius: ${props.radius ? props.radius : "0"};
      box-shadow: 1px 2px 5px 0 ${globalTheme.colors.background.light.c200}
    `;
  }}
`;

function Card(props: CardProps) {
  return (
    <StyledCard
      width={props.width ?? "340px"}
      background={globalTheme.colors.background.light.c100}
      {...props}
    >
      {props.children}
    </StyledCard>
  );
}

export default Card;
