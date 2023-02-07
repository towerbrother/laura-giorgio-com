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

import { userCookie } from '~/utils/cookie.server';
import { badRequest } from '~/utils/request.server';
import { validateFood, validateName } from '~/utils/validation';
import { rsvpGuestsDetails, getIndex } from '~/utils/mockedDB';

export type RsvpGuestsDetailsProps = {
  title: string;
  headerText: string;
  guest: string;
  form: {
    name: string;
    food: {
      label: string;
      options: {
        base: string;
        meat: string;
        fish: string;
        vegan: string;
      };
    };
    allergy: {
      label: string;
      options: {
        gluten: string;
        eggs: string;
        shellfish: string;
        nuts: string;
        milk: string;
      };
    };
  };
  button: { text: string };
};

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  const stepsInfo = {
    currentStep: 2,
    totalSteps: 3,
  };

  if (cookie) {
    return json({
      ...cookie,
      ...stepsInfo,
      rsvpGuestsDetails: rsvpGuestsDetails[getIndex(cookie.language)],
    });
  }

  return json({
    rsvp: null,
    ...stepsInfo,
    rsvpGuestsDetails: rsvpGuestsDetails[getIndex('en')],
  });
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

    if (k.includes('food')) {
      return [k, validateFood(v.toString())];
    }

    return [k, undefined];
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
        rsvp: { ...cookie.rsvp, guestsDetails: { ...fields } },
      }),
    },
  });
}

export default function Index() {
  const actionData = useActionData<typeof action>();
  const { submission, state } = useTransition();
  const { currentStep, totalSteps, rsvp, rsvpGuestsDetails } =
    useLoaderData<typeof loader>();

  const isProcessing =
    state === 'submitting' &&
    submission.formData.get('_action') === 'guests-details';

  const guests: Array<string> = Array.from(
    { length: Number(rsvp?.contactDetails?.guestsCount) },
    (_, i) => (i + 1).toString()
  );

  return (
    <Form method="post" className="flex flex-col py-4 md:py-6">
      <FormHeader
        headerText={rsvpGuestsDetails?.headerText}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
      <h1 className="text-neutral-800 text-2xl font-bold mb-3">
        {rsvpGuestsDetails?.title}
      </h1>
      {guests.map((guest: string) => (
        <GuestDetails
          key={uuidv4()}
          num={guest}
          rsvp={rsvp}
          rsvpGuestsDetails={rsvpGuestsDetails}
          fieldErrors={actionData?.fieldErrors}
        />
      ))}
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
          <>{rsvpGuestsDetails?.button?.text}</>
        )}
      </Button>
    </Form>
  );
}
