import type { MetaFunction, ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, Outlet, useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => ({
  title: 'RSVP 🥳',
});

export async function loader() {
  // return the data stored somewhere
  return json({});
}

export async function action({ request }: ActionArgs) {
  await new Promise((res) => setTimeout(res, 1000));

  let formData = await request.formData();
  let { _action, ...values } = Object.fromEntries(formData);

  console.log({ values });

  if (_action === 'contact-details') {
    // store data somewhere
    return redirect('/rsvp/guestsdetails');
  }

  if (_action === 'guests-details') {
    // store data somewhere
    return redirect('/rsvp/otherdetails');
  }

  if (_action === 'other-details') {
    // store data somewhere
    return redirect('/rsvp/thanks');
  }

  if (_action === 'close-rsvp') {
    // destroy data?
    return redirect('/');
  }

  if (_action === 'go-back') {
    // switch case with different redirect
    // loader of each route should load the previous values
    return null;
  }

  return redirect('/');
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  console.log({ data });

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
