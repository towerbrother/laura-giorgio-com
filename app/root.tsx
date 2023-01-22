import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

import styles from './tailwind.css';

import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import { footer, getIndex, header } from './utils/mockedDB';

import { userLanguageCookie } from '~/utils/cookie.server';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Laura & Giorgio',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap',
      as: 'style',
    },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userLanguageCookie.parse(cookieHeader)) || {};

  if (cookie) {
    return json({
      language: cookie.language,
      header: header[getIndex(cookie.language)],
      footer: footer,
    });
  }

  return json(
    {
      language: 'en',
      header: header[getIndex('en')],
      footer: footer,
    },
    {
      headers: {
        'Set-Cookie': await userLanguageCookie.serialize({ language: 'en' }),
      },
    }
  );
};

export default function App() {
  const { language, header, footer } = useLoaderData<typeof loader>();

  return (
    <html lang={language || 'en'}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-josephin min-h-screen flex flex-col">
        <Header {...header} />
        <main>
          <Outlet />
        </main>
        <Footer {...footer} />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          Oh no! Something went wrong... we apologise for any inconvenience
          caused! 💖
        </div>
        <Scripts />
      </body>
    </html>
  );
}
