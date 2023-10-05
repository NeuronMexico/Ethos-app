import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import CreditDetailScreen from './CreditDetailScreen';

const CreditDetailController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <CreditDetailScreen />
    </SafeArea>
  );
};

export default CreditDetailController;
