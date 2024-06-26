import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "premi.st",
  description: "Hello from Korea. Craft, design, explore, somewhere in between.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link href="https://o.polychrome.network/fonts/ofl/gothic-a1-labgrtsqmatch-v1/100/Gothic A1 ExtraLight.css" rel="stylesheet" />
        <link href="https://o.polychrome.network/fonts/ofl/gothic-a1-labgrtsqmatch-v1/300/Gothic A1 Light.css" rel="stylesheet" />
        <link href="https://o.polychrome.network/fonts/ofl/gothic-a1-labgrtsqmatch-v1/400/Gothic A1 Medium.css" rel="stylesheet" />
        <link href="https://o.polychrome.network/fonts/ofl/gothic-a1-labgrtsqmatch-v1/500/Gothic A1 SemiBold.css" rel="stylesheet" />
        <link href="https://o.polychrome.network/fonts/ofl/gothic-a1-labgrtsqmatch-v1/700/Gothic A1 Bold.css" rel="stylesheet" />
        <link href="https://o.polychrome.network/fonts/ofl/gothic-a1-labgrtsqmatch-v1/900/Gothic A1 Black.css" rel="stylesheet" />
        <link href="https://o.polychrome.network/fonts/lfs/LabGrotesque-v2.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
