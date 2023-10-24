import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { PaymentAlertInfo, SafeArea } from 'components';
import { useAlert, useBottomSheet } from 'context';
import ScheduledPaymentsScreen from './ScheduledPaymentsScreen';
import { PaymentBottomSheetContent } from './components';

const ScheduledPaymentsController: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const { t } = useTranslation();

  const alert = useAlert();
  const bottomSheet = useBottomSheet();

  const onPressPayment = useCallback(() => {
    bottomSheet.show((
      <PaymentBottomSheetContent
        onPressDelete={() => {
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
                onPress: alert.hide,
                type: 'destructive-primary',
              },
              {
                label: t('global:cancel'),
                onPress: alert.hide,
                type: 'secondary',
              },
            ],
          });
        }}
        onPressEdit={() => {
          bottomSheet.hide();
          navigate('TransactionsGlobalStack', { screen: 'ScheduledPayment', params: { edition: true } });
        }}
      />
    ));
  }, [alert, bottomSheet, navigate, t]);

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
