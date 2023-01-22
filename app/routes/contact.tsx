import Banner from '~/components/molecules/Banner';
import Photos from '~/components/molecules/Photos';

import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { userLanguageCookie } from '~/utils/cookie.server';
import {
  contactBanner,
  getIndex,
  contributionBanner,
  photos,
} from '~/utils/mockedDB';

export const meta: MetaFunction = () => ({
  title: 'Contact 👌',
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const { language } = await userLanguageCookie.parse(cookieHeader);

  return json({
    contactBanner: contactBanner[getIndex(language)],
    contributionBanner: contributionBanner[getIndex(language)],
    photos: photos,
  });
}

export default function Index() {
  const { contactBanner, contributionBanner, photos } =
    useLoaderData<typeof loader>();

  return (
    <>
      <Banner {...contactBanner} />
      <Photos {...photos} />
      <Banner {...contributionBanner} />
    </>
  );
}
