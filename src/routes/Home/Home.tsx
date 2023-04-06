import { Main } from "grommet";
import TopMenu from "../../features/TopMenu/TopMenu";
import CarCarousel from "../../features/CarCard/CarCard";
import { EFuel, EGear } from "../../shared/enum/ECar";

function Home() {
  return (
    <>
      <TopMenu />
      <Main pad="small">
        <CarCarousel
          images={[
            "https://m.media-amazon.com/images/I/61xNbcWbvDL._AC_SY450_.jpg",
            "https://www.logitechstore.com.br/media/catalog/product/cache/1/image/634x545/9df78eab33525d08d6e5fb8d27136e95/t/e/teclado_mec_nico_sem_fio_rgb_para_jogos_logitech_g613_1_.png",
          ]}
          car={{
            model: "Chevette",
            brand: "Chevrolet",
            fuel: EFuel.GASOLINE,
            gearShift: EGear.MANUAL,
            price: 4000,
            uuid: "sd7q6ws6dq7s6fdd",
            year: 1990,
          }}
        />
      </Main>
    </>
  );
}

export default Home;
