import '@coinbase/onchainkit/styles.css';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Tang with "Base"ball Bat',
  description: 'A free mint and homage to the Base ecosystem from the Tang Cat team. Let’s knock it out of the park!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
      <body className="bg-background dark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
