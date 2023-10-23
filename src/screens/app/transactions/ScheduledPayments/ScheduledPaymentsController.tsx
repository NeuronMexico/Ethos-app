import React, { useCallback } from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useBottomSheet } from 'context';
import ScheduledPaymentsScreen from './ScheduledPaymentsScreen';
import { PaymentBottomSheetContent } from './components';

const ScheduledPaymentsController: React.FC = () => {
  const dispatch = useDispatch();

  const bottomSheet = useBottomSheet();

  const onPressPayment = useCallback(() => {
    bottomSheet.show(<PaymentBottomSheetContent onPressDelete={bottomSheet.hide} onPressEdit={bottomSheet.hide} />);
  }, [bottomSheet]);

  return (
    <SafeArea>
      <ScheduledPaymentsScreen onPressPayment={onPressPayment} />
    </SafeArea>
  );
};

export default ScheduledPaymentsController;
