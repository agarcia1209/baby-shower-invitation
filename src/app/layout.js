import { Playfair_Display, Great_Vibes, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif'
});

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cursive'
});

export const metadata = {
  title: 'Baby Shower Invitation',
  description: 'Join us to celebrate our daughter!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}