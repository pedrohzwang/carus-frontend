import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm as Form } from "@mantine/form";
import { TopMenu } from "../../features/TopMenu/TopMenu";
import { useMantineTheme } from "@mantine/core";

export function ModalLogin() {
  const theme = useMantineTheme();
  const form = Form({
    initialValues: {
      name: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      name: (value) => (value.trim() !== "" ? null : "Invalid name"),
      password: (value) => (value.length >= 5 ? null : "Password too small"),
    },
  });

  return (
    <>
      <TopMenu />
      <Box 
        maw={300} 
        mx="auto" 
        mt={"15vh"} 
        p={30} 
        bg={theme.colorScheme}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Name:"
            placeholder="Your name"
            {...form.getInputProps("name")}
          />
          <TextInput
            withAsterisk
            label="Password:"
            placeholder="******"
            type={`password`}
            {...form.getInputProps("password")}
          />
          <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />
          <Group position="right" mt="md">
            <Button type="submit">
                Sign in
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
