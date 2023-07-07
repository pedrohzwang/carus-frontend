import { CarCard } from "../../features/CarCard/CarCard";
import { useState, useEffect } from "react";
import { CarDTO } from "../../shared/dto/CarDTO";
import { getCars } from "../../services/Car/CarService";
import { Container, Grid, Col, Box } from "@mantine/core";
import { TopMenu } from "../../features/TopMenu/TopMenu";

export function Home() {
  const [cars, setCars] = useState([] as CarDTO[]);

  useEffect(() => {
    getCars().then((cars) => setCars(cars));
  }, []);

  return (
    <Box>
      <TopMenu />
      <Container size="xl" pt={20}>
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
    </Box>
  );
}
