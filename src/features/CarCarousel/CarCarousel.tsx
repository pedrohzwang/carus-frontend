import { Carousel, Image } from "grommet";
import { CarCarouselProps } from "./CarCarousel.type";

function CarCarousel(props: CarCarouselProps) {
  return (
    <Carousel width="340px" height="200px">
      {props.data.map((url) => (
        <Image
          key={url}
          src={url}
          fit="cover"
          style={{ borderRadius: "35px" }}
        />
      ))}
    </Carousel>
  );
}

export default CarCarousel;
