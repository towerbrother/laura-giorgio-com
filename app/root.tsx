import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Analytics } from '@vercel/analytics/react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import { GlobalStyle } from './globalStyles';

import { header } from './common/mocks';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'laura-giorgio-com',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap',
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Header {...header} />
        <main>
          <Outlet />
        </main>
        <Footer />
        <GlobalStyle />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        <Analytics />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div>Oh no! Something went wrong...</div>
        <div>
          <p>{error.message}</p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
