import { Box, Carousel, Image } from "grommet";
import { CarCardProps, CarInfoProps } from "./CarCard.type";
import globalTheme from "../../theme/theme";
import Card from "../../components/Card/Card";
import Text from "../../components/Text/Text";

const CarInfo = ({ car }: CarInfoProps) => {
  return (
    <Box
      pad={{
        horizontal: globalTheme.patterns.spacing.medium,
        top: globalTheme.patterns.spacing.small,
        bottom: globalTheme.patterns.spacing.xsmall,
      }}
    >
      <Text color={globalTheme.colors.primary.c100} weight="bold">
        {car.model}
      </Text>
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
