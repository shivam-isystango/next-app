"use client";

import { AppShell, Group, Title } from "@mantine/core";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const AppContainer = ({ children }: Props) => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header className="flex items-center px-4 justify-between">
        <Link href="/">
          <Title order={3}>Logo</Title>
        </Link>
        <Group>
          <Link href="/about-us" className="hover:underline">
            About Us
          </Link>
          <Link href="/categories" className="hover:underline">
            Category
          </Link>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppContainer;
