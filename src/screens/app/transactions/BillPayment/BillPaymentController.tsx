import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import BillPaymentScreen from './BillPaymentScreen';

const BillPaymentController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <BillPaymentScreen />
    </SafeArea>
  );
};

export default BillPaymentController;
