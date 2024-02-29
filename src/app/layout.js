import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Mall',
  description: 'with Nextjs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}