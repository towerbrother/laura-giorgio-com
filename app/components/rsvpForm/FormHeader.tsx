import { FaArrowLeft } from 'react-icons/fa';

import Button from '~/components/reusable/Button';
import ConditionalWrapper from '~/components/reusable/ConditionalWrapper';

type FormHeaderProps = {
  currentStep: number;
  totalSteps: number;
};

const FormHeader = ({ currentStep, totalSteps }: FormHeaderProps) => {
  const isCurrentStepTheFirst = currentStep === 1;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center text-base mb-2">
        <ConditionalWrapper condition={!isCurrentStepTheFirst}>
          <Button type="submit" name="_action" value="go-back">
            <FaArrowLeft className="text-neutral-800 mr-2 mb-[2px]" />
          </Button>
        </ConditionalWrapper>
        <h3 className={`flex-1 text-neutral-800 font-bold m-0`}>
          Step {currentStep} of {totalSteps}
        </h3>
        <Button
          type="submit"
          name="_action"
          value="close-rsvp"
          className="text-cyan-600 font-bold"
        >
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
