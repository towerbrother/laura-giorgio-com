import { v4 as uuidv4 } from 'uuid';
import { json } from '@remix-run/node';
import { useLoaderData, useTransition } from '@remix-run/react';

import FormHeader from '~/components/rsvpForm/FormHeader';
import Button from '~/components/reusable/Button';
import GuestDetails from '~/components/rsvpForm/GuestDetails';
import ConditionalWrapper from '~/components/reusable/ConditionalWrapper';

/* 
loader with step 2 to be given to FormHeader

actionData
- name
- surname
- email 
- guests-car
- guests-number-more-12
- guests-number-6-12
- guests-number-6-12
- guests-number-less-6

- contact-details
*/

export async function loader() {
  const currentStep: number = 2;
  const totalSteps: number = 3;
  return json({ currentStep, totalSteps });
}

export default function Index() {
  const { currentStep, totalSteps } = useLoaderData<typeof loader>();
  const transition = useTransition(); // improve using Login.tsx example

  const adults: Array<string> = ['1', '2', '3'];
  const kids: Array<string> = [];
  const babies: Array<string> = ['1'];

  return (
    <>
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
      <input type="hidden" name="hidden-input" value="guests-details" />
      <Button
        type="submit"
        name="_action"
        value="guests-details"
        className="border-none bg-cyan-600 text-neutral-100 font-bold rounded-md p-2 mt-5 w-full md:w-max md:px-5 md:text-lg lg:text-xl"
      >
        {transition.submission ? 'PROCESSING...' : 'NEXT'}
      </Button>
    </>
  );
}
