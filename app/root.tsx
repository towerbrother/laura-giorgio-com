import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Analytics } from '@vercel/analytics/react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import { GlobalStyle } from './globalStyles';

import { userLangPrefs } from '~/utils/cookie.server';

import { footer, getIndex, header } from './utils/mockedDB';

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
      as: 'style',
    },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = await userLangPrefs.parse(cookieHeader);

  const defaultCookie = { language: 'en' };

  if (cookie) {
    return json({
      language: cookie.language,
      header: header[getIndex(cookie.language)],
    });
  }

  return json(
    {
      language: defaultCookie.language,
      header: header[getIndex(defaultCookie.language)],
    },
    {
      headers: {
        'Set-Cookie': await userLangPrefs.serialize(defaultCookie),
      },
    }
  );
};

export default function App() {
  const { language, header } = useLoaderData<typeof loader>();

  return (
    <html lang={language ?? 'en'}>
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
        <Footer {...footer} />
        <GlobalStyle />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
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
