import { Card as MCard } from "@mantine/core";
import { CardProps } from "./CardProps.type";

export function Card(props: CardProps) {
  return <MCard withBorder>{props.children}</MCard>;
}

export default Card;
