import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import BenefitsScreen from './BenefitsScreen';

const BenefitsController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <BenefitsScreen />
    </SafeArea>
  );
};

export default BenefitsController;
