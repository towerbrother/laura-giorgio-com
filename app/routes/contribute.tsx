import { contribution, getIndex, photos } from '~/utils/mockedDB';
import Contribution from '~/components/molecules/Contribution';
import Photos from '~/components/molecules/Photos';

import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { userLanguageCookie } from '~/utils/cookie.server';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: 'Contribute 💖',
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = await userLanguageCookie.parse(cookieHeader);

  const condition = cookie !== null && cookie.hasOwnProperty('language');

  return json({
    contribution: contribution[getIndex(condition ? cookie.language : 'en')],
    photos: photos,
  });
}

export default function Index() {
  const { contribution, photos } = useLoaderData<typeof loader>();

  return (
    <>
      <Contribution {...contribution} />
      <Photos {...photos} />
    </>
  );
}
