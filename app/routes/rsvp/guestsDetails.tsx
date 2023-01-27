import { v4 as uuidv4 } from 'uuid';
import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from '@remix-run/react';
import { FaSpinner } from 'react-icons/fa';

import FormHeader from '~/components/rsvpForm/FormHeader';
import Button from '~/components/reusable/Button';
import GuestDetails from '~/components/rsvpForm/GuestDetails';
import ConditionalWrapper from '~/components/reusable/ConditionalWrapper';
import { badRequest } from '~/utils/request.server';
import {
  validateDate,
  validateFoodPreference,
  validateName,
} from '~/utils/validation';

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

  if (_action === 'close-rsvp') {
    return redirect('/');
  }

  if (_action === 'go-back') {
    return redirect('/rsvp/contactdetails');
  }

  const fields = { ...values };

  const mapped = Object.entries(fields).map(([k, v]) => {
    if (k.includes('name')) {
      return [k, validateName(v.toString())];
    }

    if (k.includes('date')) {
      return [k, validateDate(v.toString())];
    }

    if (k.includes('foodPreference')) {
      return [k, validateFoodPreference(v.toString())];
    }

    return v;
  });

  const fieldErrors = Object.fromEntries(mapped as Array<string[]>);

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }

  // store data somewhere
  return redirect('/rsvp/otherdetails');
}

export default function Index() {
  const actionData = useActionData<typeof action>();
  const { currentStep, totalSteps } = useLoaderData<typeof loader>();
  const { submission, state } = useTransition();

  const isProcessing =
    state === 'submitting' &&
    submission.formData.get('_action') === 'guests-details';

  const adults: Array<string> = ['1', '2', '3'];
  const kids: Array<string> = ['1'];

  return (
    <Form method="post" className="flex flex-col py-4 md:py-6">
      <FormHeader currentStep={currentStep} totalSteps={totalSteps} />
      <h1 className="text-neutral-800 text-2xl font-bold mb-3">
        Guests Details
      </h1>
      <ConditionalWrapper condition={adults.length > 0}>
        {adults.map((x) => (
          <GuestDetails
            key={uuidv4()}
            num={x}
            type="Adult"
            fieldErrors={actionData?.fieldErrors}
          />
        ))}
      </ConditionalWrapper>
      <ConditionalWrapper condition={kids.length > 0}>
        {kids.map((x) => (
          <GuestDetails
            key={uuidv4()}
            num={x}
            type="Kid"
            fieldErrors={actionData?.fieldErrors}
          />
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
