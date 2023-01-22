import Stage from '~/components/molecules/Stage';
import Tile from '~/components/molecules/Tile';

import { stage, homeTile, getIndex } from '~/utils/mockedDB';

import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { userCookie } from '~/utils/cookie.server';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: 'Home',
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
  const mappedStage = { ...stage, date: new Date(stage.date) };

  return (
    <>
      <Stage {...mappedStage} />
      <Tile {...homeTile} />
    </>
  );
}
