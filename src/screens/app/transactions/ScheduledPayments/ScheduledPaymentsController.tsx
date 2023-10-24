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

  const showDeletionAlert = useCallback(() => {
    alert.show({
      title: t('transactions:scheduledPaymentDeletedSuccessfully'),
      reference: '1909230',
      invoice: '43743',
      date: new Date(),
      checkmark: true,
      extraInfo: (
        <PaymentAlertInfo
          paymentType={t('transactions:singlePayment')}
          payee="Mario Telles"
          bank="STP"
          concept="Pago a Mario Telles"
        />
      ),
    });
  }, [alert, t]);

  const onPressEdit = useCallback(() => {
    bottomSheet.hide();
    navigate('TransactionsGlobalStack', { screen: 'ScheduledPayment', params: { edition: true } });
  }, [bottomSheet, navigate]);

  const onPressDelete = useCallback(() => {
    bottomSheet.hide();
    alert.show({
      title: t('transactions:confirmDeleteScheduledPayment'),
      extraInfo: (
        <PaymentAlertInfo
          paymentType={t('transactions:singlePayment')}
          payee="Mario Telles"
          bank="STP"
          concept="Pago a Mario Telles"
          reference="1909230"
        />
      ),
      actions: [
        {
          label: t('transactions:yesDelete'),
          onPress: async () => {
            alert.hide();
            const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
            if (result.success) showDeletionAlert();
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
          onPressDelete={onPressDelete}
          onPressEdit={onPressEdit}
        />
      ) : (
        <DirectDebitBottomSheetContent
          onPressDelete={onPressDelete}
          onPressEdit={onPressEdit}
        />
      )
    ));
  }, [bottomSheet, onPressDelete, onPressEdit]);

  return (
    <SafeArea>
      <ScheduledPaymentsScreen
        onPressPayment={onPressPayment}
        onPressAdd={() => navigate('TransactionsGlobalStack', { screen: 'ScheduledPayment' })}
      />
    </SafeArea>
  );
};

export default ScheduledPaymentsController;
