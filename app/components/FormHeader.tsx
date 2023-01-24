import { useMemo } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Button from './reusable/Button';

const FormHeader = () => {
  const currentStep = 1;
  const totalSteps = 3;
  const onClickPreviousStep = () => {};
  const onClickAbort = () => {};

  const isCurrentStepTheFirst = currentStep === 1;
  const progressBarCompletedWidth = useMemo(() => {
    return (currentStep / totalSteps) * 100;
  }, [currentStep, totalSteps]);

  return (
    <>
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
    </>
  );
};

export default FormHeader;
