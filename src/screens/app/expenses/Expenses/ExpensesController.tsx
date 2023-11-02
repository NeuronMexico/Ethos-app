import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import ExpensesScreen from './ExpensesScreen';

const ExpensesController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <ExpensesScreen />
    </SafeArea>
  );
};

export default ExpensesController;
