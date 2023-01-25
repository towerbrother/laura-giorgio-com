import { json } from '@remix-run/node';
import { useLoaderData, useTransition } from '@remix-run/react';

import FormHeader from '~/components/rsvpForm/FormHeader';
import Button from '~/components/reusable/Button';

export async function loader() {
  const currentStep: number = 3;
  const totalSteps: number = 3;
  return json({ currentStep, totalSteps });
}

export default function Index() {
  const { currentStep, totalSteps } = useLoaderData<typeof loader>();
  const transition = useTransition(); // improve using Login.tsx example

  return (
    <>
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
      <input type="hidden" name="hidden-input" value="other-details" />
      <Button
        type="submit"
        name="_action"
        value="other-details"
        className="border-none bg-cyan-600 text-neutral-100 font-bold rounded-md p-2 mt-5 w-full md:w-max md:px-5 md:text-lg lg:text-xl"
      >
        {transition.submission ? 'SUBMITTING...' : 'SUBMIT'}
      </Button>
    </>
  );
}
