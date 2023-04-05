import { Main } from "grommet";
import TopMenu from "../../features/TopMenu/TopMenu";
import CarCarousel from "../../features/CarCarousel/CarCarousel";

function Home() {
  return (
    <>
      <TopMenu />
      <Main pad="small">
        <CarCarousel
          data={[
            "https://m.media-amazon.com/images/I/61xNbcWbvDL._AC_SY450_.jpg",
            "https://www.logitechstore.com.br/media/catalog/product/cache/1/image/634x545/9df78eab33525d08d6e5fb8d27136e95/t/e/teclado_mec_nico_sem_fio_rgb_para_jogos_logitech_g613_1_.png",
          ]}
        ></CarCarousel>
      </Main>
    </>
  );
}

export default Home;
