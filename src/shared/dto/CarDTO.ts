import { EFuel, EGear } from "../enum/ECar";

export interface CarDTO {
  uuid: string;
  brand: string;
  model: string;
  fuel: EFuel;
  gearShift: EGear;
  price: number;
  year: number;
  images?: string[];
}
