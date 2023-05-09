import { Box, Carousel, Image } from "grommet";
import { CarCardProps, CarInfoProps } from "./CarCard.type";
import globalTheme from "../../theme/theme";
import Card from "../../components/Card/Card";
import Text from "../../components/Text/Text";
import { EFuel, EGear } from "../../shared/enum/ECar";

const getFuelLabel = (fuel: EFuel) => {
  switch(fuel) {
    case EFuel.CNG: return "GNV";
    case EFuel.DIESEL: return "Diesel";
    case EFuel.ELETRIC: return "Elétrico";
    case EFuel.ETHANOL: return "Etanol";
    case EFuel.FLEX: return "Flex";
    case EFuel.GASOLINE: return "Gasolina";
    case EFuel.HYBRID: return "Híbrido";
  }
}

const getGearLabel = (gear: EGear) => {
  return gear === EGear.AUTOMATIC ? "Automático" : "Manual";
} 

const CarInfo = ({ car }: CarInfoProps) => {
  return (
    <Box
      pad={{
        horizontal: globalTheme.patterns.spacing.medium,
        top: globalTheme.patterns.spacing.small,
        bottom: globalTheme.patterns.spacing.xsmall,
      }}
    >
      <Text
        color={globalTheme.colors.complementary?.black.c100}
        weight="bold"
        textAlign="center"
      >
        {car.brand} {car.model} - {car.year}
      </Text>
      <Box direction="row" gap="xsmall" justify="center">
        <Text color={globalTheme.colors.complementary?.black.c100}>{getGearLabel(car.gearShift)}</Text>
        <Text color={globalTheme.colors.complementary?.black.c100}>{getFuelLabel(car.fuel)}</Text>
      </Box>
      <Box direction="row" gap="xsmall" justify="center">
        <Text color={globalTheme.colors.actionSave} weight="bold" size="large">
          R$ {car.price}
        </Text>
        <Text
          color={globalTheme.colors.actionSave}
          weight="bold"
          alignSelf="center"
        >
          por dia
        </Text>
      </Box>
    </Box>
  );
};

function CarCarousel(props: CarCardProps) {
  return (
    <Card
      width="340px"
      background={globalTheme.colors.background.light.c100}
      radius={globalTheme.patterns.border.radius.xxlarge}
    >
      <Carousel height="200px">
        {props.images.map((url) => (
          <Image
            key={url}
            src={url}
            fit="cover"
            style={{ borderRadius: globalTheme.patterns.border.radius.xxlarge }}
          />
        ))}
      </Carousel>
      <CarInfo car={props.car} />
    </Card>
  );
}

export default CarCarousel;
