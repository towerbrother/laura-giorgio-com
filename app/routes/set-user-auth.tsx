import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { userCookie } from '~/utils/cookie.server';

export async function loader() {
  return json('Not allowed', { status: 405 });
}

export async function action({ request }: ActionArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  const formData = await request.formData();
  const password = formData.get('password');

  return redirect('/', {
    headers: {
      'Set-Cookie': await userCookie.serialize({
        isAuth:
          typeof password === 'string' &&
          password === process.env.ENTRY_PASSWORD,
        language: cookie ? cookie.language : 'en',
      }),
    },
  });
}
