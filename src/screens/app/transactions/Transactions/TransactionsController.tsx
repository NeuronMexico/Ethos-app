import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { PayCardBottomSheetContent, SafeArea } from 'components';
import { useBottomSheet } from 'context';
import TransactionsScreen from './TransactionsScreen';

const TransactionsController: React.FC = () => {
  const dispatch = useDispatch();
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

  return (
    <SafeArea>
      <TransactionsScreen
        onPressScheduledPayments={() => navigate('TransactionsGlobalStack')}
        onPressServices={() => navigate('TransactionsGlobalStack', { screen: 'BillPayment' })}
        onPressCash={() => navigate('TransactionsGlobalStack', { screen: 'CashPayment' })}
        onPressCoDi={() => {}}
        onPressContacts={() => navigate('ContactsGlobalStack')}
        onPressNewPayment={() => navigate('TransactionsGlobalStack', { screen: 'Payment' })}
        onPressCashCollection={() => {}}
        onPressCoDiCollection={() => {}}
        onPressContactsCollection={() => {}}
        onPressEthosQR={() => {}}
        onPressScheduledCollections={() => {}}
        onPressPayPersonalProject={onPressPayPersonalProject}
      />
    </SafeArea>
  );
};

export default TransactionsController;
