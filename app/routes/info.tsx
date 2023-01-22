import { info, getIndex, photos } from '~/utils/mockedDB';
import Info from '~/components/molecules/Info';
import Photos from '~/components/molecules/Photos';

import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { userCookie } from '~/utils/cookie.server';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: 'Info 👀',
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = await userCookie.parse(cookieHeader);

  const condition = cookie !== null && cookie.hasOwnProperty('language');

  return json({
    info: info[getIndex(condition ? cookie.language : 'en')],
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
