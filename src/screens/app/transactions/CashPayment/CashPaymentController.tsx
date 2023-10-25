import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import CashPaymentScreen from './CashPaymentScreen';

const CashPaymentController: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeArea>
      <CashPaymentScreen onPressEstablishments={() => navigate('CardsGlobalStack', { screen: 'Establishments' })} />
    </SafeArea>
  );
};

export default CashPaymentController;
