import { CarouselExtendedProps } from "grommet";

export interface CarCard extends Omit<CarouselExtendedProps, 'children'> {
  data: string[];
}
