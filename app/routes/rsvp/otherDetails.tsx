import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useLoaderData, useTransition } from '@remix-run/react';
import { FaSpinner } from 'react-icons/fa';

import FormHeader from '~/components/rsvpForm/FormHeader';
import Button from '~/components/reusable/Button';

export async function loader() {
  const currentStep: number = 3;
  const totalSteps: number = 3;
  // get the already input data - if any
  return json({ currentStep, totalSteps });
}

export async function action({ request }: ActionArgs) {
  await new Promise((res) => setTimeout(res, 1000));

  let formData = await request.formData();
  let { _action, ...values } = Object.fromEntries(formData);

  if (_action === 'close-rsvp') {
    return redirect('/');
  }

  if (_action === 'go-back') {
    return redirect('/rsvp/guestsdetails');
  }

  console.log({ values });

  // store data somewhere
  return redirect('/rsvp/thanks');
}

export default function Index() {
  const { currentStep, totalSteps } = useLoaderData<typeof loader>();
  const { submission, state } = useTransition();

  const isProcessing =
    state === 'submitting' &&
    submission.formData.get('_action') === 'other-details';

  return (
    <Form method="post" className="flex flex-col py-4 md:py-6">
      <FormHeader currentStep={currentStep} totalSteps={totalSteps} />
      <h1 className="text-neutral-800 text-2xl font-bold mb-3">
        Last step... hurra! 🙌
      </h1>
      <h3 className="text-neutral-800 text-lg font-bold mb-3">
        Thanks for doing that!
      </h3>
      <p className="text-neutral-800 mb-5 text-sm md:text-base">
        Did we forget something you feel is important? Or, do you just want to
        say "Hi"?
      </p>
      <p className="text-neutral-800 mb-5 text-sm md:text-base">
        Use the textarea below. We will read it, promised!
      </p>
      <textarea
        className="border border-neutral-300 rounded-md p-4 mb-3 h-40 lg:h-52 xl:h-60"
        name="textarea"
      />
      <Button
        type="submit"
        name="_action"
        value="other-details"
        className="border-none bg-cyan-600 text-neutral-100 font-bold rounded-md p-2 mt-5 w-full md:w-max md:px-5 md:text-lg lg:text-xl"
      >
        {isProcessing ? (
          <div className="flex items-center justify-center">
            <FaSpinner className="animate-spin mx-2" />
            <span>PROCESSING...</span>
          </div>
        ) : (
          'SUBMIT'
        )}
      </Button>
    </Form>
  );
}
