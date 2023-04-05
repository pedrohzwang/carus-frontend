import { CarouselExtendedProps } from "grommet";

export interface CarCarouselProps extends Omit<CarouselExtendedProps, 'children'> {
  data: string[];
}
