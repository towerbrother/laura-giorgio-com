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
  const redirectUrl = formData.get('redirectUrl');
  const language = formData.get('language');

  return redirect(typeof redirectUrl === 'string' ? redirectUrl : '/', {
    headers: {
      'Set-Cookie': await userCookie.serialize({
        isAuth: cookie ? cookie.isAuth : false,
        rsvp: cookie ? cookie.rsvp : null,
        language: typeof language === 'string' ? language : 'en',
      }),
    },
  });
}
