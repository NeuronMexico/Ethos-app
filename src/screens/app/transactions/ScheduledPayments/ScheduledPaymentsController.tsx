import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useBottomSheet } from 'context';
import ScheduledPaymentsScreen from './ScheduledPaymentsScreen';
import { PaymentBottomSheetContent } from './components';

const ScheduledPaymentsController: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const bottomSheet = useBottomSheet();

  const onPressPayment = useCallback(() => {
    bottomSheet.show((
      <PaymentBottomSheetContent
        onPressDelete={bottomSheet.hide}
        onPressEdit={() => {
          bottomSheet.hide();
          navigate('TransactionsGlobalStack', { screen: 'EditPayment' });
        }}
      />
    ));
  }, [bottomSheet, navigate]);

  return (
    <SafeArea>
      <ScheduledPaymentsScreen onPressPayment={onPressPayment} />
    </SafeArea>
  );
};

export default ScheduledPaymentsController;
