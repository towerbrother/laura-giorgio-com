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

import { userCookie } from '~/utils/cookie.server';
import { badRequest } from '~/utils/request.server';
import {
  validateName,
  validateSurname,
  validateEmail,
} from '~/utils/validation';

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  const stepsInfo = {
    currentStep: 1,
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

  const fieldErrors = {
    mainGuestName: validateName(fields?.mainGuestName.toString()),
    mainGuestSurname: validateSurname(fields?.mainGuestSurname.toString()),
    mainGuestEmail: validateEmail(fields?.mainGuestEmail.toString()),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }

  return redirect('/rsvp/guestsdetails', {
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
    submission.formData.get('_action') === 'contact-details';

  console.log({ rsvp });
  return (
    <Form method="post" className="flex flex-col py-4 md:py-6">
      <FormHeader currentStep={currentStep} totalSteps={totalSteps} />
      <h1 className="text-neutral-800 text-2xl font-bold mb-3">
        Contact Details
      </h1>
      <div className="flex flex-col w-full mb-1">
        <label
          htmlFor="name"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          Name{' '}
        </label>
        <input
          id="name"
          type="text"
          name="mainGuestName"
          defaultValue={rsvp?.mainGuestName ? rsvp?.mainGuestName : ''}
          autoComplete="off"
          className={`border ${
            actionData?.fieldErrors?.mainGuestName
              ? 'border-red-600'
              : 'border-neutral-300'
          } rounded-md p-2`}
        />
        <p className="text-sm text-red-600 mt-1">
          {actionData?.fieldErrors?.mainGuestName ? (
            actionData?.fieldErrors?.mainGuestName
          ) : (
            <>&nbsp;</>
          )}
        </p>
      </div>
      <div className="flex flex-col w-full mb-1">
        <label
          htmlFor="surname"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          Surname{' '}
        </label>
        <input
          id="surname"
          type="text"
          name="mainGuestSurname"
          defaultValue={rsvp?.mainGuestSurname ? rsvp?.mainGuestSurname : ''}
          autoComplete="off"
          className={`border ${
            actionData?.fieldErrors?.mainGuestName
              ? 'border-red-600'
              : 'border-neutral-300'
          } rounded-md p-2`}
        />
        <p className="text-sm text-red-600 mt-1">
          {actionData?.fieldErrors?.mainGuestSurname ? (
            actionData?.fieldErrors?.mainGuestSurname
          ) : (
            <>&nbsp;</>
          )}
        </p>
      </div>
      <div className="flex flex-col w-full mb-1">
        <label
          htmlFor="email"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          Email{' '}
        </label>
        <input
          id="email"
          type="email"
          name="mainGuestEmail"
          defaultValue={rsvp?.mainGuestEmail ? rsvp?.mainGuestEmail : ''}
          autoComplete="off"
          className={`border ${
            actionData?.fieldErrors?.mainGuestName
              ? 'border-red-600'
              : 'border-neutral-300'
          } rounded-md p-2`}
        />
        <p className="text-sm text-red-600 mt-1">
          {actionData?.fieldErrors?.mainGuestEmail ? (
            actionData?.fieldErrors?.mainGuestEmail
          ) : (
            <>&nbsp;</>
          )}
        </p>
      </div>
      <legend className="text-neutral-800 font-bold mt-1 lg:text-lg">
        Will you and your family/group have a car?
      </legend>
      <label className="mt-2 w-max">
        <input
          type="radio"
          name="guestsCar"
          value="no"
          defaultChecked={rsvp ? rsvp?.guestsCar === 'no' : true}
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        No
      </label>
      <label className="mt-2 w-max">
        <input
          type="radio"
          name="guestsCar"
          value="yes"
          defaultChecked={rsvp ? rsvp?.guestsCar === 'yes' : false}
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Yes
      </label>
      <legend className="text-neutral-800 font-bold mt-5 lg:text-lg">
        How many people are you completing the RSVP for?
      </legend>
      <p className="text-sm text-neutral-600 mb-2">
        Attention: that should also include yourself
      </p>
      <label
        htmlFor="guestsNumberMore12"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        12+ years old{' '}
      </label>
      <select
        id="guestsNumberMore12"
        name="guestsNumberMore12"
        defaultValue={rsvp?.guestsNumberMore12 ? rsvp?.guestsNumberMore12 : '1'}
        className="border border-neutral-300 rounded-md p-3 mb-5 cursor-pointer"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <label
        htmlFor="guestsNumber612"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        6-to-12 years old{' '}
      </label>
      <select
        id="guestsNumber612"
        name="guestsNumber612"
        defaultValue={rsvp?.guestsNumber612 ? rsvp?.guestsNumber612 : '0'}
        className="border border-neutral-300 rounded-md p-3 mb-5 cursor-pointer"
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <label
        htmlFor="guestsNumberLess6"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        0-to-6 years old{' '}
      </label>
      <select
        id="guestsNumberLess6"
        name="guestsNumberLess6"
        defaultValue={rsvp?.guestsNumberLess6 ? rsvp?.guestsNumberLess6 : '0'}
        className="border border-neutral-300 rounded-md p-3 mb-5 cursor-pointer"
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <Button
        type="submit"
        name="_action"
        value="contact-details"
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
