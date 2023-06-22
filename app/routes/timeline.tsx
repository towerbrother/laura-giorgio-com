import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { timeline } from '~/utils/mockedDB';

export const meta: MetaFunction = () => ({
  title: 'Timeline ⏰',
  description: 'Timeline of the day.',
});

export async function loader() {
  return json({
    timeline,
  });
}

export default function Index() {
  const {
    timeline: { src },
  } = useLoaderData<typeof loader>();

  return (
    <>
      <img className='h-auto w-auto mx-auto mb-4' src={src} alt='Timeline' />
    </>
  );
}
