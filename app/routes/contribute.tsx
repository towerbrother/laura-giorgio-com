import { contribution, getIndex } from '~/utils/mockedDB';
import Banner from '~/components/Banner';

import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { userCookie } from '~/utils/cookie.server';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: 'Contribute 💖',
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
      <Banner {...contribution} height="h-[80vh]" />
    </>
  );
}
