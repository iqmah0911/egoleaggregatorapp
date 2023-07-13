import React, { useState } from 'react';
import DataPrompt from './DataPrompt';
import DataConfirmation from './DataConfirmation';
import DataReceipt from './DataReceipt';

const DataLayout = ({close}) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };


  const renderComponent = () => {
    switch (step) {
      case 1:
        return <DataPrompt close={close} onNext={handleNextStep} />;
      case 2:
        return <DataConfirmation close={close} onNext={handleNextStep} onPrevious={handlePreviousStep} />;
      case 3:
        return <DataReceipt close={close} onNext={close} onPrevious={handlePreviousStep} />;
      default:
        return null;
    }
  };

  return <>{renderComponent()}</>;
};

export default DataLayout;
