import type {
  ActionArgs,
  LinksFunction,
  LoaderArgs,
  MetaFunction,
} from '@remix-run/node';
import { redirect, json } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useActionData,
  useCatch,
  useLoaderData,
} from '@remix-run/react';

import styles from './tailwind.css';

import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { footer, getIndex, header } from './utils/mockedDB';

import { userCookie } from './utils/cookie.server';
import { badRequest } from './utils/request.server';
import { validatePassword } from './utils/validation';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Laura & Giorgio',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles, as: 'style' },
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
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  if (cookie) {
    return json({
      language: cookie.language,
      isAuth: cookie.isAuth,
      header: header[getIndex(cookie.language)],
      footer: footer,
    });
  }

  return json(
    {
      language: 'en',
      isAuth: false,
      header: header[getIndex('en')],
      footer: footer,
    },
    {
      headers: {
        'Set-Cookie': await userCookie.serialize({
          language: 'en',
          isAuth: false,
        }),
      },
    }
  );
};

export async function action({ request }: ActionArgs) {
  await new Promise((res) => setTimeout(res, 2000));

  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  const formData = await request.formData();
  const password = formData.get('password');

  if (typeof password !== 'string') {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: 'Oh no, incorrect submission.',
    });
  }

  const fields = { password };
  const fieldErrors = { password: validatePassword(password) };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }

  return redirect('/', {
    headers: {
      'Set-Cookie': await userCookie.serialize({
        isAuth: true,
        language: cookie ? cookie.language : 'en',
      }),
    },
  });
}

export default function App() {
  const actionData = useActionData<typeof action>();
  const loaderData = useLoaderData<typeof loader>();

  return (
    <html lang={loaderData?.language || 'en'}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-josephin min-h-screen flex flex-col before:box-border after:box-border">
        {!loaderData?.isAuth ? (
          <Login fieldErrors={actionData?.fieldErrors} />
        ) : (
          <>
            <Header {...loaderData?.header} />
            <main>
              <Outlet />
            </main>
            <Footer {...loaderData?.footer} />
          </>
        )}
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
      <body className="before:box-border after:box-border">
        <div className="w-screen h-screen flex flex-col items-center p-4 pt-10">
          <p className="text-sm md:text-xl">
            Oh no! 🥵 Something went wrong... we apologise for any inconvenience
            caused!
          </p>
          <p className="text-sm md:text-xl">
            Please, let Giorgio know. He will do his best to fix the issue!
          </p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="before:box-border after:box-border">
        <div className="w-screen h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-5xl text-neutral-800 py-10">
            {caught.status} {caught.statusText}
          </h1>
          <Link
            to="/"
            prefetch="intent"
            className="bg-neutral-800 transition-all duration-200 ease-in-out rounded-md text-neutral-100 font-bold text-xl py-2 px-4 mx-2 hover:opacity-80"
          >
            HOME
          </Link>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
