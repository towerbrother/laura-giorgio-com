import type { MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: 'RSVP 🥳',
  description: 'Page with RSVP form. To be used to confirm your presence.',
});

export default function Index() {
  return (
    <div className="w-full max-w-5xl px-3 md:px-6 pt-3 pb-2 my-0 mx-auto md:py-6 lg:px-16">
      <Outlet />
    </div>
  );
}
