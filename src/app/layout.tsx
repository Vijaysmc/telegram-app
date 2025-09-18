import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import HomeBanner from "./components/Home/HomeBanner";

const inter = Inter({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: '',
  description: '',
  icons: {
    icon: '/images/logo-ico.png',
  },
};

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
      
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
