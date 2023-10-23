import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import ScheduledPaymentsScreen from './ScheduledPaymentsScreen';

const ScheduledPaymentsController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <ScheduledPaymentsScreen />
    </SafeArea>
  );
};

export default ScheduledPaymentsController;
