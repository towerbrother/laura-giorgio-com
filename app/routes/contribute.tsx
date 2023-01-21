import { contribution, getIndex, photos } from '~/utils/mockedDB';
import Contribution from '~/components/molecules/Contribution';
import Photos from '~/components/molecules/Photos';

import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { userLangPrefs } from '~/utils/cookie.server';
import { useLoaderData } from '@remix-run/react';

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const { language } = await userLangPrefs.parse(cookieHeader);

  return json({
    contribution: contribution[getIndex(language)],
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
