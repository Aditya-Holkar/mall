'use client';

import Head from '@/components/Header/Header';

import Foot from '@/components/Footer/Footer';

import { Content } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Head />
      <Content>{children}</Content>
      <Foot />
    </div>
  );
}