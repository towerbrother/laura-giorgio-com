import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { userLanguageCookie } from '~/utils/cookie.server';

export async function loader() {
  return json('Not allowed', { status: 405 });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  const { language, redirectUrl } = values;

  return redirect(typeof redirectUrl === 'string' ? redirectUrl : '/', {
    headers: {
      'Set-Cookie': await userLanguageCookie.serialize({ language: language }),
    },
  });
}
