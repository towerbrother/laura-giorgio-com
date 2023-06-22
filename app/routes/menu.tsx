import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import Tile from '~/components/Tile';

import { userCookie } from '~/utils/cookie.server';
import { getIndex } from '~/utils/language';
import { meatTile, fishTile, veganTile } from '~/utils/mockedDB';

export const meta: MetaFunction = () => ({
  title: 'Menu 🍜',
  description: 'Page where you can see the menu.',
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = await userCookie.parse(cookieHeader);

  const condition = cookie !== null && cookie.hasOwnProperty('language');

  return json({
    meatTile: meatTile[getIndex(condition ? cookie.language : 'en')],
    fishTile: fishTile[getIndex(condition ? cookie.language : 'en')],
    veganTile: veganTile[getIndex(condition ? cookie.language : 'en')],
  });
}

export default function Index() {
  const { meatTile, fishTile, veganTile } = useLoaderData<typeof loader>();

  return (
    <>
      <Tile {...meatTile} />
      <Tile {...fishTile} />
      <Tile {...veganTile} />
    </>
  );
}
