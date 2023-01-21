import Stage from '~/components/molecules/Stage';
import Tile from '~/components/molecules/Tile';

import { stage, homeTile, getIndex } from '~/utils/mockedDB';

import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { userLangPrefs } from '~/utils/cookie.server';
import { useLoaderData } from '@remix-run/react';

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const { language } = await userLangPrefs.parse(cookieHeader);

  return json({
    stage: stage[getIndex(language)],
    homeTile: homeTile[getIndex(language)],
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
