import Tile from '~/components/molecules/Tile';

import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { userLangPrefs } from '~/utils/cookie.server';
import { getIndex, hotelTile, pensionTile } from '~/utils/mockedDB';

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const { language } = await userLangPrefs.parse(cookieHeader);

  return json({
    hotelTile: hotelTile[getIndex(language)],
    pensionTile: pensionTile[getIndex(language)],
  });
}

export default function Index() {
  const { hotelTile, pensionTile } = useLoaderData<typeof loader>();

  return (
    <>
      <Tile {...hotelTile} />
      <Tile {...pensionTile} />
    </>
  );
}
