import { info, getIndex, photos } from '~/utils/mockedDB';
import Info from '~/components/molecules/Info';
import Photos from '~/components/molecules/Photos';

import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { userLanguageCookie } from '~/utils/cookie.server';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: 'Info 👀',
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const { language } = await userLanguageCookie.parse(cookieHeader);

  return json({
    info: info[getIndex(language)],
    photos: photos,
  });
}

export default function Index() {
  const { info, photos } = useLoaderData<typeof loader>();
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
      <Photos {...photos} />
    </>
  );
}
