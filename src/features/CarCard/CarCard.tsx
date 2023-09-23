import {
  IconMapPinShare,
  IconGasStation,
  IconGasStationOff,
  IconManualGearbox,
} from "@tabler/icons-react";
import { CarInfoProps } from "./CarCard.type";
import Card from "../../components/Card/Card";
import { EFuel, EGear } from "../../shared/enum/ECar";
import {
  CardSection,
  Text,
  Image,
  Center,
  Box,
  Space,
  Stack,
  Group,
  useMantineTheme,
  Button,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
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
  border: 1px solid red;
`;

export function CarCard({ car }: CarInfoProps) {
  const theme = useMantineTheme();

  const slides = car.images?.map((image) => (
    <Carousel.Slide key={image}>
      <Center>
        <Image
          radius="lg"
          src={image}
          width={340}
          height={250}
          fit="cover"
          display={"contents"}
          alt="car image"
        />
      </Center>
    </Carousel.Slide>
  ));

  return (
    <CardContainer withBorder={false}>
      {/* Section que apresentará as imagens em carrocel */}
      <CardSection>
        <Carousel loop withControls withIndicators align="center" maw={370}>
          {slides}
        </Carousel>
      </CardSection>
      <CardSection>
        <Box px="md" py="xs">
          <Text weight="bold">
            {car.brand} {car.model} {car.year}
          </Text>
          <Space h="sm" />
          <Group>
            <Group spacing="5px">
              {car.fuel === EFuel.ELETRIC ? (
                <IconGasStationOff />
              ) : (
                <IconGasStation />
              )}
              <Text>{getFuelLabel(car.fuel)}</Text>
            </Group>
            <Group spacing="5px">
              <IconManualGearbox />
              <Text> {getGearLabel(car.gearShift)}</Text>
            </Group>
          </Group>
          <Space h="sm" />
          <Group align="center">
            <IconMapPinShare />
            <Text>
              {car.address ? car.address : "Sem endereço especificado"}
            </Text>
          </Group>
          <Space h="md" />
          <Stack>
            <Group spacing={0} align="baseline" pl="7px">
              <Text>À partir de </Text>
              <Text
                mx="6px"
                weight="bold"
                size="xl"
                color={theme.colors.green[7]}
              >
                R$ {car.price}
              </Text>
              <Text>/ dia</Text>
            </Group>
            <Button>Quero esse</Button>
          </Stack>
        </Box>
      </CardSection>
    </CardContainer>
  );
}

export default CarCard;
