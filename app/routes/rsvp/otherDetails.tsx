import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useLoaderData, useTransition } from '@remix-run/react';
import { FaSpinner } from 'react-icons/fa';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import emailjs from '@emailjs/browser';

import FormHeader from '~/components/rsvpForm/FormHeader';
import Button from '~/components/reusable/Button';

import { userCookie } from '~/utils/cookie.server';
import { rsvpOtherDetails } from '~/utils/mockedDB';
import { mapTemplateParams } from '~/utils/email';
import { getIndex } from '~/utils/language';

export type RsvpOtherDetailsProps = {
  title: string;
  thanks: string;
  headerText: string;
  texts: Array<string>;
  button: { text: string; pending: string };
};

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userCookie.parse(cookieHeader)) || {};

  const stepsInfo = {
    currentStep:
      cookie?.rsvp?.contactDetails?.isAttending === 'attending' ? 3 : 2,
    totalSteps:
      cookie?.rsvp?.contactDetails?.isAttending === 'attending' ? 3 : 2,
  };

  if (cookie) {
    return json({
      ...cookie,
      ...stepsInfo,
      rsvpOtherDetails: rsvpOtherDetails[getIndex(cookie.language)],
    });
  }

  return json({
    rsvp: null,
    ...stepsInfo,
    rsvpOtherDetails: rsvpOtherDetails[getIndex('en')],
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
    return redirect(
      cookie?.rsvp?.contactDetails?.isAttending === 'attending'
        ? '/rsvp/guestsdetails'
        : '/rsvp/contactdetails'
    );
  }

  return redirect('/rsvp/thanks', {
    headers: {
      'Set-Cookie': await userCookie.serialize({
        ...cookie,
        rsvp: {
          ...cookie.rsvp,
          guestsDetails:
            cookie.rsvp?.contactDetails?.isAttending === 'attending'
              ? { ...cookie.rsvp.guestsDetails }
              : {},
          otherDetails: { ...fields },
        },
      }),
    },
  });
}

export default function Index() {
  const { submission, state } = useTransition();
  const { currentStep, totalSteps, rsvp, rsvpOtherDetails, language } =
    useLoaderData<typeof loader>();

  const [textarea, setTextarea] = useState(rsvp?.otherDetails?.textarea || '');

  useEffect(() => {
    if (rsvp?.textarea) {
      setTextarea(rsvp?.textarea);
    }
  }, [rsvp?.textarea]);

  const isProcessing =
    state === 'submitting' &&
    submission.formData.get('_action') === 'other-details';

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };

  const handleClick = async () => {
    const templateParams = {
      ...mapTemplateParams({ rsvp, language }),
      textarea,
    };

    alert('SUCCESS!! :D');

    // if (rsvp?.contactDetails?.isAttending === 'attending') {
    //   emailjs
    //     .send(
    //       'service_6ugz6tc',
    //       'template_n8c1c6n',
    //       templateParams,
    //       'dlz34_-Y-x2AkkQ7f'
    //     )
    //     .then(
    //       function (response) {
    //         console.log('SUCCESS!', response.status, response.text);
    //       },
    //       function (error) {
    //         console.log('FAILED...', error);
    //       }
    //     );
    // } else {
    //   emailjs
    //     .send(
    //       'service_6ugz6tc',
    //       'template_9kwks55',
    //       templateParams,
    //       'dlz34_-Y-x2AkkQ7f'
    //     )
    //     .then(
    //       function (response) {
    //         console.log('SUCCESS!', response.status, response.text);
    //       },
    //       function (error) {
    //         console.log('FAILED...', error);
    //       }
    //     );
    // }
  };

  return (
    <Form method='post' className='flex flex-col px-6 py-4 md:py-6'>
      <FormHeader
        headerText={rsvpOtherDetails?.headerText}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
      <h1 className='text-neutral-800 text-2xl font-bold mb-3'>
        {rsvpOtherDetails?.title}
      </h1>
      <h3 className='text-neutral-800 text-lg font-bold mb-3'>
        {rsvpOtherDetails?.thanks}
      </h3>
      <>
        {rsvpOtherDetails?.texts.map((text: string) => (
          <p
            key={uuidv4()}
            className='text-neutral-800 mb-5 text-sm md:text-base'
          >
            {text}
          </p>
        ))}
      </>
      <textarea
        className='border border-neutral-300 rounded-md p-4 mb-3 h-40 lg:h-52 xl:h-60'
        name='textarea'
        onChange={handleChange}
        defaultValue={textarea}
      />
      <Button
        type='submit'
        name='_action'
        value='other-details'
        className='border-none bg-cyan-600 text-neutral-100 font-bold rounded-md p-2 mt-5 w-full md:w-max md:px-5 md:text-lg lg:text-xl'
        onClick={handleClick}
      >
        {isProcessing ? (
          <div className='flex items-center justify-center'>
            <FaSpinner className='animate-spin mx-2' />
            <span>{rsvpOtherDetails?.button?.pending}</span>
          </div>
        ) : (
          <>{rsvpOtherDetails?.button?.text}</>
        )}
      </Button>
    </Form>
  );
}
