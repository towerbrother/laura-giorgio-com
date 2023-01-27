import { v4 as uuidv4 } from 'uuid';
import type { ActionArgs, LoaderArgs } from '@remix-run/node';
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

import { userCookie } from '~/utils/cookie.server';
import { badRequest } from '~/utils/request.server';
import {
  validateDate,
  validateFoodPreference,
  validateName,
} from '~/utils/validation';

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  const stepsInfo = {
    currentStep: 2,
    totalSteps: 3,
  };

  if (cookie) {
    return json({ ...cookie, ...stepsInfo });
  }

  // missing the content text - language
  return json({ rsvp: null, ...stepsInfo });
}

export async function action({ request }: ActionArgs) {
  await new Promise((res) => setTimeout(res, 1000));

  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  let formData = await request.formData();
  let { _action, ...fields } = Object.fromEntries(formData);

  if (_action === 'close-rsvp') {
    return redirect('/');
  }

  if (_action === 'go-back') {
    return redirect('/rsvp/contactdetails');
  }

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

  return redirect('/rsvp/otherdetails', {
    headers: {
      'Set-Cookie': await userCookie.serialize({
        ...cookie,
        rsvp: cookie.rsvp ? { ...cookie.rsvp, ...fields } : { ...fields },
      }),
    },
  });
}

export default function Index() {
  const actionData = useActionData<typeof action>();
  const { currentStep, totalSteps, rsvp } = useLoaderData<typeof loader>();
  const { submission, state } = useTransition();

  const isProcessing =
    state === 'submitting' &&
    submission.formData.get('_action') === 'guests-details';

  const adults: Array<string> =
    Number(rsvp?.guestsNumberMore12) === 0
      ? []
      : Array.from(Array(Number(rsvp?.guestsNumberMore12)).keys()).map((x) =>
          (x + 1).toString()
        );
  const kids: Array<string> =
    Number(rsvp?.guestsNumber612) === 0
      ? []
      : Array.from(Array(Number(rsvp?.guestsNumber612)).keys()).map((x) =>
          (x + 1).toString()
        );
  const babies: Array<string> =
    Number(rsvp?.guestsNumberLess6) === 0
      ? []
      : Array.from(Array(Number(rsvp?.guestsNumberLess6)).keys()).map((x) =>
          (x + 1).toString()
        );

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
      <ConditionalWrapper condition={babies.length > 0}>
        {babies.map((x) => (
          <GuestDetails
            key={uuidv4()}
            num={x}
            type="Baby"
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
