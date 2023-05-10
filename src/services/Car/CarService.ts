import { CarDTO } from "../../shared/dto/CarDTO";
import { EFuel, EGear } from "../../shared/enum/ECar";

export function getCars(): Promise<CarDTO[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
        {
          model: "Chevette",
          brand: "Chevrolet",
          fuel: EFuel.GASOLINE,
          gearShift: EGear.MANUAL,
          price: 4000,
          uuid: "sd7q6ws6dq7s6fdd",
          year: 1990,
        },
      ]), 2000);
  });
}
