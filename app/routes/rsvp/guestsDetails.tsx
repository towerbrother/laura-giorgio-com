import { v4 as uuidv4 } from 'uuid';
import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useLoaderData, useTransition } from '@remix-run/react';
import { FaSpinner } from 'react-icons/fa';

import FormHeader from '~/components/rsvpForm/FormHeader';
import Button from '~/components/reusable/Button';
import GuestDetails from '~/components/rsvpForm/GuestDetails';
import ConditionalWrapper from '~/components/reusable/ConditionalWrapper';

export async function loader() {
  const currentStep: number = 2;
  const totalSteps: number = 3;
  // get the already input data - if any
  return json({ currentStep, totalSteps });
}

export async function action({ request }: ActionArgs) {
  await new Promise((res) => setTimeout(res, 1000));

  let formData = await request.formData();
  let { _action, ...values } = Object.fromEntries(formData);

  console.log({ values });

  // validation
  // store data somewhere
  return redirect('/rsvp/otherdetails');
}

export default function Index() {
  const { currentStep, totalSteps } = useLoaderData<typeof loader>();
  const { submission, state } = useTransition(); // improve using Login.tsx example

  const isProcessing =
    state === 'submitting' &&
    submission.formData.get('_action') === 'guests-details';

  const adults: Array<string> = ['1', '2', '3'];
  const kids: Array<string> = [];
  const babies: Array<string> = ['1'];

  return (
    <Form method="post" className="flex flex-col py-4 md:py-6">
      <FormHeader currentStep={currentStep} totalSteps={totalSteps} />
      <h1 className="text-neutral-800 text-2xl font-bold mb-3">
        Guests Details
      </h1>
      <ConditionalWrapper condition={adults.length > 0}>
        {adults.map((x) => (
          <GuestDetails key={uuidv4()} num={x} type="Adult" />
        ))}
      </ConditionalWrapper>
      <ConditionalWrapper condition={kids.length > 0}>
        {kids.map((x) => (
          <GuestDetails key={uuidv4()} num={x} type="Kid" />
        ))}
      </ConditionalWrapper>
      <ConditionalWrapper condition={babies.length > 0}>
        {babies.map((x) => (
          <GuestDetails key={uuidv4()} num={x} type="Baby" />
        ))}
      </ConditionalWrapper>
      <Button
        type="submit"
        name="_action"
        value="guests-details"
        className="border-none bg-cyan-600 text-neutral-100 font-bold rounded-md p-2 mt-5 w-full md:w-max md:px-5 md:text-lg lg:text-xl"
      >
        {isProcessing ? (
          <div className="flex items-center justify-center">
            <FaSpinner className="animate-spin my-1 mx-4" />
          </div>
        ) : (
          'NEXT'
        )}
      </Button>
    </Form>
  );
}
