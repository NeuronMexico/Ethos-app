import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeArea } from 'components';
import i18n from 'i18n';
import { ComponentTypes } from 'screens/app/Payment/PaymentsForms';
import TransactionsScreen from './TransactionsScreen';

const TransactionsController: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const onPressEthosQR = () => {
    navigate('PaymentStack', {
      screen: 'form',
      params: {
        title: [i18n.t('payment:collectViaCODI')],
        formComponent: ComponentTypes.PaymentCollectQR,
      },
    });
  };

  const onPressTransfer = () => {
    console.log('hey');
    navigate('PaymentStack', {
      screen: 'form',
      params: {
        title: i18n.t('personalDisposition:title'),
        formComponent: ComponentTypes.PaymentTransferAccountForm,
      },
    });
  };

  const onPressPaymentQR = () => {
    navigate('PaymentStack', {
      screen: 'form',
      params: {
        title: i18n.t('transactions:paymentQR'),
        formComponent: ComponentTypes.PaymentQR,
      },
    });
  };

  return (
    <SafeArea>
      <TransactionsScreen
        onPressScheduledPayments={() => navigate('TransactionsGlobalStack')}
        onPressServices={() => navigate('TransactionsGlobalStack', { screen: 'BillPayment' })}
        onPressCash={() => navigate('TransactionsGlobalStack', { screen: 'CashPayment' })}
        onPressNewPayment={() => navigate('ChargesGlobalStack', {
          screen: 'ChargesContacts',
          params: { from: 'pay' },
        })}
        onPressCashCollection={() => {
          navigate('PaymentStack', {
            screen: 'form',
            params: {
              title: 'Cobro en efectivo',
              formComponent: ComponentTypes.PaymentCollectCash,
            },
          });
        }}
        onPressContactsCollection={() => navigate('ChargesGlobalStack', {
          screen: 'ChargesContacts',
          params: { from: 'collect' },
        })}
        onPressEthosQR={onPressEthosQR}
        onPressScheduledCollections={() => navigate('ChargesGlobalStack', { screen: 'ChargesScheduled' })}
        onPressTransfer={onPressTransfer}
        onPressPaymentQR={onPressPaymentQR}
        onPressWithdrawalNoCard={() => navigate('ChargesGlobalStack', { screen: 'WithdrawalNoCard' })}
      />
    </SafeArea>
  );
};

export default TransactionsController;
