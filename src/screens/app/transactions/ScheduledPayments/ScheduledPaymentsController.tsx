import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useDispatch } from 'reactRedux';
import { PaymentAlertInfo, SafeArea } from 'components';
import { useAlert, useBottomSheet } from 'context';
import ScheduledPaymentsScreen from './ScheduledPaymentsScreen';
import { DirectDebitBottomSheetContent, PaymentBottomSheetContent } from './components';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const ScheduledPaymentsController: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const { t } = useTranslation();

  const alert = useAlert();
  const bottomSheet = useBottomSheet();

  const showDeletionAlert = useCallback((domiciliary: boolean) => {
    alert.show({
      title: t('transactions:scheduledPaymentDeletedSuccessfully'),
      reference: domiciliary ? undefined : '1909230',
      invoice: '43743',
      date: new Date(),
      checkmark: true,
      extraInfo: (
        <PaymentAlertInfo
          amount={domiciliary ? 3957 : undefined}
          paymentType={t(`transactions:${domiciliary ? 'minimumPayment' : 'singlePayment'}`)}
          payee={domiciliary ? '' : 'Mario Telles'}
          nextPaymentDate={domiciliary ? new Date() : undefined}
          bank={domiciliary ? 'Santander' : 'STP'}
          concept={domiciliary ? '' : 'Pago a Mario Telles'}
          cardNumber={domiciliary ? '** *334' : ''}
        />
      ),
    });
  }, [alert, t]);

  const onPressEdit = useCallback((stack: string, screen: string) => {
    bottomSheet.hide();
    navigate(stack, { screen, params: { edition: true } });
  }, [bottomSheet, navigate]);

  const onPressDelete = useCallback((domiciliary: boolean) => {
    bottomSheet.hide();
    alert.show({
      title: t(
        `transactions:${domiciliary ? 'confirmDeleteDirectDebitTDC' : 'confirmDeleteScheduledPayment'}`,
        { cardNumber: '** *334' },
      ),
      extraInfo: !domiciliary ? (
        <PaymentAlertInfo
          paymentType={t('transactions:singlePayment')}
          payee="Mario Telles"
          bank="STP"
          concept="Pago a Mario Telles"
          reference="1909230"
        />
      ) : undefined,
      actions: [
        {
          label: t('transactions:yesDelete'),
          onPress: async () => {
            alert.hide();
            const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
            if (result.success) showDeletionAlert(domiciliary);
          },
          type: 'destructive-primary',
        },
        {
          label: t('global:cancel'),
          onPress: alert.hide,
          type: 'secondary',
        },
      ],
    });
  }, [alert, bottomSheet, showDeletionAlert, t]);

  // TODO: Define the payment types correctly
  const onPressPayment = useCallback((type: string) => {
    bottomSheet.show((
      type === 'single' ? (
        <PaymentBottomSheetContent
          onPressDelete={() => onPressDelete(false)}
          onPressEdit={() => onPressEdit('TransactionsGlobalStack', 'Payment')}
        />
      ) : (
        <DirectDebitBottomSheetContent
          onPressDelete={() => onPressDelete(true)}
          onPressEdit={() => onPressEdit('CardsGlobalStack', 'DomiciliaryPayment')}
        />
      )
    ));
  }, [bottomSheet, onPressDelete, onPressEdit]);

  return (
    <SafeArea>
      <ScheduledPaymentsScreen
        onPressPayment={onPressPayment}
        onPressAdd={() => navigate('TransactionsGlobalStack', { screen: 'Payment', params: { scheduled: true } })}
      />
    </SafeArea>
  );
};

export default ScheduledPaymentsController;
