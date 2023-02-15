import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

import { v4 as uuidv4 } from 'uuid';

import { userCookie } from '~/utils/cookie.server';
import { rsvpThankYou } from '~/utils/mockedDB';
import { getIndex } from '~/utils/language';
import { useLoaderData } from '@remix-run/react';

export type RsvpThankYouProps = {
  title: string;
  texts: Array<string>;
};

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  if (cookie) {
    return json({
      rsvpThankYou: rsvpThankYou[getIndex(cookie.language)],
    });
  }

  return json({
    rsvpThankYou: rsvpThankYou[getIndex('en')],
  });
}

export default function Index() {
  const { rsvpThankYou } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col justify-center items-center mt-8 lg:mt-12">
      <div className="flex flex-col justify-center items-center p-6 lg:py-8 lg:px-12 w-max">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-neutral-800 mb-4">
          {rsvpThankYou.title}
        </h1>
        {rsvpThankYou.texts.map((text) => (
          <p
            key={uuidv4()}
            className="text-neutral-800 my-2 text-xs sm:text-base md:text-md lg:text-xl"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
