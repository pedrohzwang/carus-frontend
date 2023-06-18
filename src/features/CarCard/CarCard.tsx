import { CarCardPropsV2, CarInfoProps } from "./CarCard.type";
import Card from "../../components/Card/Card";
import { Text } from "../../components/Text/Text";
import { EFuel, EGear } from "../../shared/enum/ECar";
import {
  CardSection,
  Text as MText,
  Image as MImage,
  Center,
} from "@mantine/core";
import { Carousel as MCarousel } from "@mantine/carousel";
import styled from "styled-components";

const getFuelLabel = (fuel: EFuel) => {
  switch (fuel) {
    case EFuel.CNG:
      return "GNV";
    case EFuel.DIESEL:
      return "Diesel";
    case EFuel.ELETRIC:
      return "Elétrico";
    case EFuel.ETHANOL:
      return "Etanol";
    case EFuel.FLEX:
      return "Flex";
    case EFuel.GASOLINE:
      return "Gasolina";
    case EFuel.HYBRID:
      return "Híbrido";
  }
};

const getGearLabel = (gear: EGear) => {
  return gear === EGear.AUTOMATIC ? "Automático" : "Manual";
};

const CardContainer = styled(Card)`
  max-width: 500px;
`;

export function CarCard(props: CarCardPropsV2) {
  const slides = props.car.images?.map((image, index) => (
    <MCarousel.Slide key={image}>
      <Center>
        <MImage
          radius={"md"}
          src={image}
          width={340}
          height={250}
          fit="cover"
          display={"contents"}
        />
      </Center>
    </MCarousel.Slide>
  ));

  return (
    <CardContainer>
      {/* Section que apresentará as imagens em carrocel */}
      <CardSection>
        <MCarousel loop withControls withIndicators align="center" maw={370}>
          {slides}
        </MCarousel>
      </CardSection>
      <CardSection>
        <MText>Valor</MText>
      </CardSection>
    </CardContainer>
  );
}

export default CarCard;
