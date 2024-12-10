import { Checkbox, Container, Divider } from "@mantine/core";
import { theme } from "../../theme";

export default function Home() {
  return (
    <Container size="lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quidem
      consequatur nesciunt aliquid, eveniet aliquam laboriosam quasi hic
      molestias. Et, dicta eveniet! Provident in veniam minima ea tenetur ipsum
      autem!
      <Divider my="md" />
      <Checkbox
        color={theme.colors.pink}
        defaultChecked
        label="I agree to the terms and conditions"
      />
    </Container>
  );
}
