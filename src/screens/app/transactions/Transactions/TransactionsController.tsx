import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import TransactionsScreen from './TransactionsScreen';

const TransactionsController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <TransactionsScreen
        onPressScheduledPayments={() => {}}
        onPressServices={() => {}}
        onPressCash={() => {}}
        onPressCoDi={() => {}}
        onPressContacts={() => {}}
        onPressNewPayment={() => {}}
      />
    </SafeArea>
  );
};

export default TransactionsController;
