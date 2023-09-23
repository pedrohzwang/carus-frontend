import { CarCard } from "../../features/CarCard/CarCard";
import { useState, useEffect } from "react";
import { CarDTO } from "../../shared/dto/CarDTO";
import { getCars } from "../../services/Car/CarService";
import { Container, Grid, Col, Box } from "@mantine/core";
import { TopMenu } from "../../features/TopMenu/TopMenu";
import { CenterLoading } from "../../components/CenterLoading/CenterLoading";

export function Home() {
  const [cars, setCars] = useState([] as CarDTO[]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getCars()
      .then((cars) => setCars(cars))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {!isLoading && (
        <Container size="xl" pt={20} >
          {cars.length > 0 && (
            <Grid gutter="xl">
              {cars.map((car) => (
                <Col key={car.uuid} span={3}>
                  <CarCard car={car} />
                </Col>
              ))}
            </Grid>
          )}
        </Container>
      )}
      {isLoading && <CenterLoading message="Buscando carros..." />}
    </>
  );
}
