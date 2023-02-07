import { useState } from 'react';
import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from '@remix-run/react';
import { FaSpinner } from 'react-icons/fa';

import { rsvpContactDetails, getIndex } from '~/utils/mockedDB';

import ConditionalWrapper from '~/components/reusable/ConditionalWrapper';
import FormHeader from '~/components/rsvpForm/FormHeader';
import Button from '~/components/reusable/Button';

import { userCookie } from '~/utils/cookie.server';
import { badRequest } from '~/utils/request.server';
import {
  validateName,
  validateSurname,
  validateEmail,
  validateDate,
  validateGuestsCount,
} from '~/utils/validation';

export type RsvpContactDetailsProps = {
  title: string;
  headerText: string;
  form: {
    name: string;
    surname: string;
    email: { label: string; placeholder: string };
    peopleNumber: {
      text: string;
      subtext: string;
    };
    date: {
      label: string;
      options: {
        base: string;
        friday: string;
        saturday: string;
      };
    };
  };
  attendance: {
    attending: string;
    notAttending: string;
  };
  button: { text: string };
};

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  const stepsInfo = {
    currentStep: 1,
    totalSteps:
      cookie?.rsvp?.contactDetails?.isAttending === 'attending' ? 3 : 2,
  };

  if (cookie) {
    return json({
      ...cookie,
      ...stepsInfo,
      rsvpContactDetails: rsvpContactDetails[getIndex(cookie.language)],
    });
  }

  return json({
    rsvp: null,
    ...stepsInfo,
    rsvpContactDetails: rsvpContactDetails[getIndex('en')],
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

  const fieldErrors = {
    mainGuestName: validateName(fields?.mainGuestName?.toString()),
    mainGuestSurname: validateSurname(fields?.mainGuestSurname?.toString()),
    mainGuestEmail: validateEmail(fields?.mainGuestEmail?.toString()),
    arrivalDate: validateDate(fields?.arrivalDate?.toString()),
    guestsCount: validateGuestsCount(
      Number(fields?.guestsCount),
      fields?.isAttending?.toString()
    ),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }

  return redirect(
    `${
      fields?.isAttending === 'attending'
        ? '/rsvp/guestsdetails'
        : '/rsvp/otherdetails'
    }`,
    {
      headers: {
        'Set-Cookie': await userCookie.serialize({
          ...cookie,
          rsvp: cookie.rsvp
            ? { ...cookie.rsvp, contactDetails: { ...fields } }
            : { contactDetails: { ...fields } },
        }),
      },
    }
  );
}

export default function Index() {
  const actionData = useActionData<typeof action>();
  const { submission, state } = useTransition();
  const { currentStep, totalSteps, rsvp, rsvpContactDetails } =
    useLoaderData<typeof loader>();

  const isProcessing =
    state === 'submitting' &&
    submission.formData.get('_action') === 'contact-details';

  const initialIsAttending =
    rsvp === undefined || rsvp?.contactDetails?.isAttending === 'attending'
      ? true
      : false;
  const [isAttending, setIsAttending] = useState(initialIsAttending);

  const initialGuestsCount =
    rsvp === undefined || !isAttending
      ? 0
      : Number(rsvp?.contactDetails?.guestsCount);
  const [guestsCount, setGuestsCount] = useState(initialGuestsCount);

  return (
    <Form method="post" className="flex flex-col py-4 md:py-6">
      <FormHeader
        headerText={rsvpContactDetails?.headerText}
        currentStep={currentStep}
        totalSteps={isAttending ? totalSteps : '2'}
      />
      <h1 className="text-neutral-800 text-2xl font-bold mb-3">
        {rsvpContactDetails?.title}
      </h1>
      <div className="flex flex-col w-full mb-1">
        <label
          htmlFor="name"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          {rsvpContactDetails?.form?.name}
        </label>
        <input
          id="name"
          type="text"
          name="mainGuestName"
          defaultValue={
            rsvp?.contactDetails?.mainGuestName
              ? rsvp?.contactDetails?.mainGuestName
              : ''
          }
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
          {rsvpContactDetails?.form?.surname}
        </label>
        <input
          id="surname"
          type="text"
          name="mainGuestSurname"
          defaultValue={
            rsvp?.contactDetails?.mainGuestSurname
              ? rsvp?.contactDetails?.mainGuestSurname
              : ''
          }
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
          {rsvpContactDetails?.form?.email?.label}
        </label>
        <input
          id="email"
          type="email"
          name="mainGuestEmail"
          defaultValue={
            rsvp?.contactDetails?.mainGuestEmail
              ? rsvp?.contactDetails?.mainGuestEmail
              : ''
          }
          placeholder={rsvpContactDetails?.form?.email?.placeholder}
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
      <div className="flex justify-center items-center py-2 px-1 my-2 border border-neutral-300 w-max rounded-2xl">
        <div
          className={`flex items-center justify-center rounded-2xl w-max mx-1 py-3 px-6 cursor-pointer border border-white transition-all duration-200 ease-in-out ${
            isAttending ? 'border-neutral-300 bg-neutral-200' : ''
          }`}
          onClick={() => setIsAttending(true)}
        >
          <span className="text-lg text-neutral-800">
            {rsvpContactDetails?.attendance?.attending}
          </span>
        </div>
        <div
          className={`flex items-center justify-center rounded-2xl w-max mx-1 py-3 px-6 cursor-pointer border border-white transition-all duration-200 ease-in-out ${
            !isAttending ? 'border-neutral-300 bg-neutral-200' : ''
          }`}
          onClick={() => setIsAttending(false)}
        >
          <span className="text-lg text-neutral-800">
            {rsvpContactDetails?.attendance?.notAttending}
          </span>
        </div>
      </div>
      <input
        type="hidden"
        name="isAttending"
        value={isAttending ? 'attending' : 'notAttending'}
      />
      <ConditionalWrapper condition={isAttending}>
        <legend className="text-neutral-800 font-bold mt-5 lg:text-lg">
          {rsvpContactDetails?.form?.peopleNumber?.text}
        </legend>
        <p className="text-sm text-neutral-600 mb-1">
          {rsvpContactDetails?.form?.peopleNumber?.subtext}
        </p>
        <div className="flex justify-start items-center mt-1 mb-2">
          <Button
            type="button"
            className={`cursor-pointer text-neutral-800 text-3xl mx-1 py-1 px-4 my-1 border border-neutral-300 w-max rounded-[50%]`}
            onClick={() => setGuestsCount((prev) => prev - 1)}
            disabled={guestsCount <= 0}
          >
            -
          </Button>
          <div className="text-neutral-800 text-2xl mx-1 p-2">
            {guestsCount}
          </div>
          <Button
            type="button"
            className={`cursor-pointer text-neutral-800 text-3xl mx-1 py-1 px-[14px] my-1 border border-neutral-300 w-max rounded-[50%]`}
            onClick={() => setGuestsCount((prev) => prev + 1)}
          >
            +
          </Button>
          <p className="text-sm text-red-600 ml-2">
            {actionData?.fieldErrors?.guestsCount ? (
              actionData?.fieldErrors?.guestsCount
            ) : (
              <>&nbsp;</>
            )}
          </p>
          <input type="hidden" name="guestsCount" value={guestsCount} />
        </div>
        <div className="flex justify-start items-center mt-2">
          <label
            htmlFor="arrivalDate"
            className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
          >
            {rsvpContactDetails?.form?.date?.label}
          </label>
          <p className="text-xs text-red-600 ml-4">
            {actionData?.fieldErrors?.arrivalDate ? (
              actionData?.fieldErrors?.arrivalDate
            ) : (
              <>&nbsp;</>
            )}
          </p>
        </div>
        <select
          id="arrivalDate"
          name="arrivalDate"
          defaultValue={
            rsvp?.contactDetails?.arrivalDate
              ? rsvp?.contactDetails?.arrivalDate
              : ''
          }
          className={`border ${
            actionData?.fieldErrors?.arrivalDate
              ? 'border-red-600'
              : 'border-neutral-300'
          } rounded-md p-3 mb-4 mt-1 cursor-pointer`}
        >
          <option value="">
            {rsvpContactDetails?.form?.date?.options?.base}
          </option>
          <option value="friday">
            {rsvpContactDetails?.form?.date?.options?.friday}
          </option>
          <option value="saturday">
            {rsvpContactDetails?.form?.date?.options?.saturday}
          </option>
        </select>
      </ConditionalWrapper>
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
          <>{rsvpContactDetails?.button?.text}</>
        )}
      </Button>
    </Form>
  );
}
