"use client"
import { ChakraProvider } from "@chakra-ui/react";
import { Providers } from './GlobalRedux/provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </Providers>
      </body>
    </html>
  );
}
