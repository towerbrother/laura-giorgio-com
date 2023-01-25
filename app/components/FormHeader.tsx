import { FaArrowLeft } from 'react-icons/fa';
import Button from './reusable/Button';
import ConditionalWrapper from './reusable/ConditionalWrapper';

const FormHeader = () => {
  const currentStep: 1 | 2 | 3 = 1;
  const totalSteps = 3;
  const onClickPreviousStep = () => {};
  const onClickAbort = () => {};

  const isCurrentStepTheFirst = currentStep === 1;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center text-base mb-2">
        <ConditionalWrapper condition={!isCurrentStepTheFirst}>
          <Button role="submit" onClick={onClickPreviousStep}>
            <FaArrowLeft className="text-neutral-800 mr-2 mb-[2px]" />
          </Button>
        </ConditionalWrapper>
        <h3 className={`flex-1 text-neutral-800 font-bold m-0`}>
          Step {currentStep} of {totalSteps}
        </h3>
        <Button onClick={onClickAbort} className="text-cyan-600 font-bold">
          Close
        </Button>
      </div>
      <div
        role="progressbar"
        aria-valuenow={(currentStep / totalSteps) * 100}
        className="w-full bg-neutral-200 h-2 rounded-md"
      >
        <div
          className="bg-cyan-600 h-full rounded-md transition-all duration-500 ease-in-out"
          style={{
            width: `${(currentStep / totalSteps) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FormHeader;
