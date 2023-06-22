import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import Tile from '~/components/Tile';

import { userCookie } from '~/utils/cookie.server';
import { getIndex } from '~/utils/language';
import { obdachTile, wolfsbergTile, styriaTile } from '~/utils/mockedDB';

export const meta: MetaFunction = () => ({
  title: 'Holiday 🛫',
  description: 'Info about holidays.',
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = await userCookie.parse(cookieHeader);

  const condition = cookie !== null && cookie.hasOwnProperty('language');

  return json({
    obdachTile: obdachTile[getIndex(condition ? cookie.language : 'en')],
    wolfsbergTile: wolfsbergTile[getIndex(condition ? cookie.language : 'en')],
    styriaTile: styriaTile[getIndex(condition ? cookie.language : 'en')],
  });
}

export default function Index() {
  const { obdachTile, wolfsbergTile, styriaTile } =
    useLoaderData<typeof loader>();

  return (
    <>
      <Tile {...obdachTile} />
      <Tile {...wolfsbergTile} />
      <Tile {...styriaTile} />
    </>
  );
}
