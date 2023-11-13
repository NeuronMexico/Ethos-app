import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeArea } from 'components';
import i18n from 'i18n';
import TransactionsScreen from './TransactionsScreen';

const TransactionsController: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeArea>
      <TransactionsScreen
        onPressScheduledPayments={() => navigate('TransactionsGlobalStack')}
        onPressServices={() => navigate('TransactionsGlobalStack', { screen: 'BillPayment' })}
        onPressCash={() => navigate('TransactionsGlobalStack', { screen: 'CashPayment' })}
        onPressCoDi={() => {}}
        onPressContacts={() => navigate('ContactsGlobalStack')}
        onPressNewPayment={() => navigate('TransactionsGlobalStack', { screen: 'Payment' })}
        onPressCashCollection={() => navigate('ChargesGlobalStack', { screen: 'ChargesCash' })}
        onPressCoDiCollection={() => {}}
        onPressContactsCollection={() => navigate('ChargesGlobalStack', { screen: 'ChargesContacts' })}
        onPressEthosQR={() => navigate('PaymentStack', {
          screen: 'form',
          params: { title: i18n.t('payment:collectViaCODI') },
        })}
        onPressScheduledCollections={() => navigate('ChargesGlobalStack', { screen: 'ChargesScheduled' })}
      />
    </SafeArea>
  );
};

export default TransactionsController;
