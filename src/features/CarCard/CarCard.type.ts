import { CarouselExtendedProps } from "grommet";
import { CarDTO } from "../../shared/dto/CarDTO";

export interface CarCardProps extends Omit<CarouselExtendedProps, "children"> {
  images: string[];
  car: CarDTO;
}

export interface CarInfoProps {
  car: CarDTO;
}
