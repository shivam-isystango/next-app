import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import AppContainer from "@/components/AppContainer/appContainer";

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider>
          <AppContainer>{children}</AppContainer>
        </MantineProvider>
      </body>
    </html>
  );
}
