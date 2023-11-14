import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { PayCardBottomSheetContent, SafeArea } from 'components';
import { useBottomSheet } from 'context';
import i18n from 'i18n';
import { ComponentTypes } from 'screens/app/Payment/PaymentsForms';
import TransactionsScreen from './TransactionsScreen';

const TransactionsController: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const { t } = useTranslation();

  const bottomSheet = useBottomSheet();

  const onPressPayPersonalProject = useCallback(async () => {
    bottomSheet.show(
      <PayCardBottomSheetContent
        onPressCashPayment={() => {
          bottomSheet.hide();
          navigate('PaymentFlow', { flow: 'personal-project-payment' });
        }}
        onPressDirectDebitPayment={() => {
          bottomSheet.hide();
          navigate('DomiciliaryPayment', { flow: 'personal-project' });
        }}
      />,
      { title: t('cards:payViaSpei'), titleAlign: 'left' },
    );
  }, [bottomSheet, navigate, t]);

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
    navigate('PaymentStack', {
      screen: 'form',
      params: {
        title: [i18n.t('personalDisposition:title'), i18n.t('personalDisposition:transfer')],
        formComponent: ComponentTypes.PaymentTransfer,
      },
    });
  };

  return (
    <SafeArea>
      <TransactionsScreen
        onPressScheduledPayments={() => navigate('TransactionsGlobalStack')}
        onPressServices={() => navigate('TransactionsGlobalStack', { screen: 'BillPayment' })}
        onPressCash={() => navigate('TransactionsGlobalStack', { screen: 'CashPayment' })}
        onPressCoDi={() => {}}
        onPressContacts={() => navigate('ChargesGlobalStack', {
          screen: 'ChargesContacts',
          params: { from: 'pay' },
        })}
        onPressNewPayment={() => navigate('TransactionsGlobalStack', { screen: 'Payment' })}
        onPressCashCollection={() => navigate('ChargesGlobalStack', { screen: 'ChargesCash' })}
        onPressCoDiCollection={() => { }}
        onPressPayPersonalProject={onPressPayPersonalProject}
        onPressContactsCollection={() => navigate('ChargesGlobalStack', {
          screen: 'ChargesContacts',
          params: { from: 'collect' },
        })}
        onPressEthosQR={onPressEthosQR}
        onPressScheduledCollections={() => navigate('ChargesGlobalStack', { screen: 'ChargesScheduled' })}
        onPressTransfer={onPressTransfer}
        onPressWithdrawalNoCard={() => navigate('ChargesGlobalStack', { screen: 'WithdrawalNoCard' })}
      />
    </SafeArea>
  );
};

export default TransactionsController;
