import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

import Stage from '~/components/Stage';
import Tile from '~/components/Tile';

import { stage, homeTile } from '~/utils/mockedDB';
import { userCookie } from '~/utils/cookie.server';
import { getIndex } from '~/utils/language';

export const meta: MetaFunction = () => ({
  title: 'Home',
  description: 'Home page with short story of the bride and the groom.',
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  const condition = cookie !== null && cookie.hasOwnProperty('language');

  return json({
    stage: stage[getIndex(condition ? cookie.language : 'en')],
    homeTile: homeTile[getIndex(condition ? cookie.language : 'en')],
  });
}

export default function Index() {
  const { stage, homeTile } = useLoaderData<typeof loader>();

  return (
    <>
      <Stage {...stage} />
      <Tile {...homeTile} />
    </>
  );
}
