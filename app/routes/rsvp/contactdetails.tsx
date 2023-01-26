import { json } from '@remix-run/node';
import { useLoaderData, useTransition } from '@remix-run/react';
import { FaSpinner } from 'react-icons/fa';

import FormHeader from '~/components/rsvpForm/FormHeader';
import Button from '~/components/reusable/Button';

/* 
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
  const currentStep: number = 1;
  const totalSteps: number = 3;
  return json({ currentStep, totalSteps });
}

export default function Index() {
  const { currentStep, totalSteps } = useLoaderData<typeof loader>();
  const { submission, state } = useTransition(); // improve using Login.tsx example

  const isProcessing =
    state === 'submitting' &&
    submission.formData.get('_action') === 'contact-details';

  return (
    <>
      <FormHeader currentStep={currentStep} totalSteps={totalSteps} />
      <h1 className="text-neutral-800 text-2xl font-bold mb-3">
        Contact Details
      </h1>
      <label
        htmlFor="name"
        className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
      >
        Name{' '}
      </label>
      <input
        id="name"
        type="text"
        name="main-guest-name"
        autoComplete="off"
        className="border border-neutral-300 rounded-md p-2 mb-5"
      />
      <label
        htmlFor="surname"
        className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
      >
        Surname{' '}
      </label>
      <input
        id="surname"
        type="text"
        name="main-guest-surname"
        autoComplete="off"
        className="border border-neutral-300 rounded-md p-2 mb-5"
      />
      <label
        htmlFor="email"
        className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
      >
        Email{' '}
      </label>
      <input
        id="email"
        type="email"
        name="main-guest-email"
        autoComplete="off"
        className="border border-neutral-300 rounded-md p-2 mb-5"
      />
      <legend className="text-neutral-800 font-bold mt-1 lg:text-lg">
        Will you and your family/group have a car?
      </legend>
      <label className="mt-2 w-max">
        <input
          type="radio"
          name="guests-car"
          value="no"
          className="accent-cyan-600 mr-2 cursor-pointer"
          defaultChecked
        />
        No
      </label>
      <label className="mt-2 w-max">
        <input
          type="radio"
          name="guests-car"
          value="yes"
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
        htmlFor="guests-number-more-12"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        12+ years old{' '}
      </label>
      <select
        id="guests-number-more-12"
        name="guests-number-more-12"
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
        htmlFor="guests-number-6-12"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        6-to-12 years old{' '}
      </label>
      <select
        id="guests-number-6-12"
        name="guests-number-6-12"
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
        htmlFor="guests-number-less-6"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        0-to-6 years old{' '}
      </label>
      <select
        id="guests-number-less-6"
        name="guests-number-less-6"
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
      <input type="hidden" name="hidden-input" value="contactdetails" />
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
    </>
  );
}
