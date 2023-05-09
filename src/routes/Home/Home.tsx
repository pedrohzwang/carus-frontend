import { Box, PageContent, Spinner } from "grommet";
import TopMenu from "../../features/TopMenu/TopMenu";
import CarCarousel from "../../features/CarCard/CarCard";
import { useState, useEffect } from "react";
import { CarDTO } from "../../shared/dto/CarDTO";
import { getCars } from "../../services/Car/CarService";
import globalTheme from "../../theme/theme";

function Home() {
  const [cars, setCars] = useState([] as CarDTO[]);

  useEffect(() => {
    getCars().then((cars) => setCars(cars));
  }, []);

  return (
    <>
      <TopMenu />
      {cars.length > 0 && (
        <PageContent responsive>
          {cars.map((car) => (
            <CarCarousel
              key={car.uuid}
              images={[
                "https://m.media-amazon.com/images/I/61xNbcWbvDL._AC_SY450_.jpg",
                "https://www.logitechstore.com.br/media/catalog/product/cache/1/image/634x545/9df78eab33525d08d6e5fb8d27136e95/t/e/teclado_mec_nico_sem_fio_rgb_para_jogos_logitech_g613_1_.png",
              ]}
              car={{
                uuid: car.uuid,
                model: car.model,
                brand: car.brand,
                fuel: car.fuel,
                gearShift: car.gearShift,
                price: car.price,
                year: car.year,
              }}
            />
          ))}
        </PageContent>
      )}
      {cars.length === 0 && (
        <Box direction="row" basis="full" flex="grow" justify="center" align="center" height="100%">
          <Spinner
            size="xlarge"
            color={globalTheme.colors.complementary?.white.c100}
          />
        </Box>
      )}
    </>
  );
}

export default Home;
