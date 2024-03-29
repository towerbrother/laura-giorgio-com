import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

import {
  info,
  travelTile,
  contributionBanner,
  transportationTile,
  accomodationTile,
} from '~/utils/mockedDB';
import { userCookie } from '~/utils/cookie.server';
import { getIndex } from '~/utils/language';

import Info from '~/components/Info';
import Tile from '~/components/Tile';
import Banner from '~/components/Banner';

export const meta: MetaFunction = () => ({
  title: 'Info 👀',
  description: 'Page with general information related to the wedding day.',
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = await userCookie.parse(cookieHeader);

  const condition = cookie !== null && cookie.hasOwnProperty('language');

  return json({
    info: info[getIndex(condition ? cookie.language : 'en')],
    travelTile: travelTile[getIndex(condition ? cookie.language : 'en')],
    transportationTile:
      transportationTile[getIndex(condition ? cookie.language : 'en')],
    accomodationTile:
      accomodationTile[getIndex(condition ? cookie.language : 'en')],
    contributionBanner:
      contributionBanner[getIndex(condition ? cookie.language : 'en')],
  });
}

export default function Index() {
  const {
    info,
    travelTile,
    transportationTile,
    accomodationTile,
    contributionBanner,
  } = useLoaderData<typeof loader>();
  const mappedInfo = {
    ...info,
    items: info.items.map((item) => ({
      ...item,
      dateTime: new Date(item.dateTime),
    })),
  };

  return (
    <>
      <Info {...mappedInfo} />
      <Tile {...travelTile} />
      <Tile {...transportationTile} />
      <Tile {...accomodationTile} />
      <Banner {...contributionBanner} />
    </>
  );
}
