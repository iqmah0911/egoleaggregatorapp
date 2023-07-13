import React, { useState } from 'react';
import Prompt from './Prompt';
import Confirmation from './Confirmation';
import Receipt from './Receipt'

const AirtimeLayout = ({close}) => {
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
        return <Prompt close={close} onNext={handleNextStep} />;
      case 2:
        return <Confirmation close={close} onNext={handleNextStep} onPrevious={handlePreviousStep} />;
      case 3:
        return <Receipt close={close} onNext={close} onPrevious={handlePreviousStep} />;
      default:
        return null;
    }
  };

  return <>{renderComponent()}</>;
};

export default AirtimeLayout;
