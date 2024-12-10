"use client";

import {
  Button,
  Card,
  Container,
  Grid,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const categories = [
  {
    id: "c1",
    name: "Category 1",
    image: "/lighthouse.jpg",
    description:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    price: "1000",
  },
  {
    id: "c2",
    name: "Category 2",
    image: "/lighthouse.jpg",
    description:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
  },
  {
    id: "c3",
    name: "Category 3",
    image: "/lighthouse.jpg",
    description:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    price: "1000",
  },
];

const CategoriesPage = () => {
  const router = useRouter();
  return (
    <Container size="lg">
      <Title order={1} mb="lg">
        Categories
      </Title>
      <Grid gutter={20}>
        {categories.map((category) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={category.id}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section className="relative l h-[175px]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{category.name}</Text>
              </Group>

              <Text size="sm" className="text-gray">
                {category.description}
              </Text>

              <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => router.push(`categories/${category.id}`)}
              >
                View
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesPage;
