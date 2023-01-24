import type { MetaFunction, ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, Outlet } from '@remix-run/react';
import { useMemo } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import Button from '~/components/reusable/Button';

export const meta: MetaFunction = () => ({
  title: 'RSVP 🥳',
});

export async function loader() {
  return json({});
}

export async function action({ request }: ActionArgs) {
  await new Promise((res) => setTimeout(res, 2000));

  const formData = await request.formData();
  console.log({ formData });

  return redirect('/');
}

export default function Index() {
  const currentStep = 1;
  const totalSteps = 3;
  const onClickPreviousStep = () => {};
  const onClickAbort = () => {};

  const isCurrentStepTheFirst = currentStep === 1;
  const progressBarCompletedWidth = useMemo(() => {
    return (currentStep / totalSteps) * 100;
  }, [currentStep, totalSteps]);

  return (
    <div className="w-full max-w-5xl px-5 pt-5 pb-2 my-0 mx-auto md:p-8">
      <Form method="post">
        <div className="flex justify-between items-center text-base mb-2">
          {!isCurrentStepTheFirst && (
            <Button role="img" onClick={onClickPreviousStep}>
              <FaArrowLeft />
            </Button>
          )}
          <h3
            className={`flex-1 text-neutral-800 font-bold m-0 ml-${
              !isCurrentStepTheFirst ? '16px' : '0'
            }`}
          >
            Step {currentStep} of {totalSteps}
          </h3>
          <Button onClick={onClickAbort} className="text-cyan-600 font-bold">
            Close
          </Button>
        </div>
        <div
          role="progressbar"
          aria-valuenow={progressBarCompletedWidth}
          className={`bg-neutral-300 h-2 rounded-sm transition-all duration-500 ease-in-out after:block after:bg-cyan-600 after:h-full after:rounded-md after:w-[${progressBarCompletedWidth}%]`}
        />
        <div className="flex flex-col py-6 md:py-10">
          <Outlet />
        </div>
      </Form>
    </div>
  );
}
