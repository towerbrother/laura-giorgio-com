import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { userIsAuthCookie } from '~/utils/cookie.server';

export async function loader() {
  return json('Not allowed', { status: 405 });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const password = formData.get('password');

  return redirect('/', {
    headers: {
      'Set-Cookie': await userIsAuthCookie.serialize({
        isAuth: typeof password === 'string' && password === 'JuniBella2023!',
      }),
    },
  });
}
