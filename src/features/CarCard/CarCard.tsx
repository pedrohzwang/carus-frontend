import { Carousel, Image } from "grommet";
import { CarCard } from "./CarCard.type";
import globalTheme from "../../theme/theme";
import Card from "../../components/Card/Card";

function CarCarousel(props: CarCard) {
  return (
    <Card width="340px" background={globalTheme.colors.background.light.c100} radius={globalTheme.patterns.border.radius.xxlarge}>
      <Carousel height="200px">
        {props.data.map((url) => (
          <Image
            key={url}
            src={url}
            fit="cover"
            style={{ borderRadius: globalTheme.patterns.border.radius.xxlarge }}
          />
        ))}
      </Carousel>
    </Card>
  );
}

export default CarCarousel;
