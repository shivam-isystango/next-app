import { Blockquote, Container, Title } from "@mantine/core";
import React from "react";

const AboutUsPage = () => {
  return (
    <Container size="lg">
      <Title order={1} mb="lg">
        About Us
      </Title>
      <Blockquote color="blue" cite="– Forrest Gump" mt="xl">
        Life is like an npm install – you never know what you are going to get.
      </Blockquote>
    </Container>
  );
};

export default AboutUsPage;
