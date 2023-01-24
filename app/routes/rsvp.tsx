import type { MetaFunction, ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: 'RSVP 🥳',
});

export async function loader() {
  return json({});
}

export async function action({ request }: ActionArgs) {
  await new Promise((res) => setTimeout(res, 2000));

  const formData = await request.formData();
  console.log({ formData });

  return redirect('/');
}

export default function Index() {
  return (
    <div className="w-full max-w-5xl px-3 md:px-6 pt-3 pb-2 my-0 mx-auto md:py-6 lg:px-16">
      <Form method="post">
        <div className="flex flex-col py-4 md:py-6">
          <Outlet />
        </div>
      </Form>
    </div>
  );
}
