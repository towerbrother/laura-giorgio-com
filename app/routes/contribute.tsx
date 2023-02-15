import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import Banner from '~/components/Banner';

import { contribution } from '~/utils/mockedDB';
import { userCookie } from '~/utils/cookie.server';
import { getIndex } from '~/utils/language';

export const meta: MetaFunction = () => ({
  title: 'Contribute 💖',
  description: 'Call to action, contribute to bride and groom future.',
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = await userCookie.parse(cookieHeader);

  const condition = cookie !== null && cookie.hasOwnProperty('language');

  return json({
    contribution: contribution[getIndex(condition ? cookie.language : 'en')],
  });
}

export default function Index() {
  const { contribution } = useLoaderData<typeof loader>();

  return (
    <>
      <Banner {...contribution} height="h-[88vh]" />
    </>
  );
}
