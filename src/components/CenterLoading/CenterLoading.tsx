import { Center, Flex, Loader, Stack, Text } from "@mantine/core";
import React from "react";
import { CenterLoadingProps } from "./CenterLoading.type";

export function CenterLoading(props: CenterLoadingProps) {
  return (
    <Center mx="auto" h="90vh">
      <Stack align="center">
        <Loader size="xl" />
        {props.message && <Text>{props.message}</Text>}
      </Stack>
    </Center>
  );
}
