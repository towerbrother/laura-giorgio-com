import {
  accomodationTile,
  contributionBanner,
  getIndex,
  transportationTile,
} from '~/utils/mockedDB';
import Banner from '~/components/molecules/Banner';
import Tile from '~/components/molecules/Tile';

import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { userLangPrefs } from '~/utils/cookie.server';
import { useLoaderData } from '@remix-run/react';

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const { language } = await userLangPrefs.parse(cookieHeader);

  return json({
    transportationTile: transportationTile[getIndex(language)],
    accomodationTile: accomodationTile[getIndex(language)],
    contributionBanner: contributionBanner[getIndex(language)],
  });
}

export default function Index() {
  const { transportationTile, accomodationTile, contributionBanner } =
    useLoaderData<typeof loader>();

  return (
    <>
      <Tile {...transportationTile} />
      <Tile {...accomodationTile} />
      <Banner {...contributionBanner} />
    </>
  );
}
