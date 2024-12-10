import { Container, Paper, Title } from "@mantine/core";
import React from "react";

const CategoryDetailPage = () => {
  return (
    <Container size="lg">
      <Title order={1} mb="lg">
        Category Detail
      </Title>
      <Paper withBorder shadow="sm" p={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia cum
        consequuntur tenetur porro officia, nemo placeat eius animi assumenda
        repudiandae ea delectus velit possimus dignissimos facilis aspernatur
        hic sapiente?
      </Paper>
    </Container>
  );
};

export default CategoryDetailPage;
