import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import TransactionsScreen from './TransactionsScreen';

const TransactionsController: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeArea>
      <TransactionsScreen
        onPressScheduledPayments={() => navigate('TransactionsGlobalStack')}
        onPressServices={() => navigate('TransactionsGlobalStack', { screen: 'BillPayment' })}
        onPressCash={() => {}}
        onPressCoDi={() => {}}
        onPressContacts={() => {}}
        onPressNewPayment={() => navigate('TransactionsGlobalStack', { screen: 'Payment' })}
      />
    </SafeArea>
  );
};

export default TransactionsController;
