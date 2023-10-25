import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { PaymentAlertInfo, SafeArea } from 'components';
import { useAlert } from 'context';
import { TransactionsGlobalStackParams } from 'utils';
import PaymentScreen from './PaymentScreen';

interface Props extends NativeStackScreenProps<TransactionsGlobalStackParams, 'Payment'> {}

const PaymentController: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const alert = useAlert();

  const onSubmit = useCallback(() => {
    alert.show({
      title: t('transactions:scheduledPaymentEditedSuccessfully'),
      reference: '1909230',
      invoice: '43743',
      date: new Date(),
      checkmark: true,
      extraInfo: (
        <PaymentAlertInfo
          amount={2000}
          paymentType={t('transactions:singlePayment')}
          payee="Mario Telles"
          bank="STP"
          concept="Pago a Mario Telles"
        />
      ),
      actions: [{
        label: t('global:continue'),
        onPress: () => {
          alert.hide();
          navigation.goBack();
        },
        type: 'primary',
      }],
    });
  }, [alert, navigation, t]);

  return (
    <SafeArea>
      <PaymentScreen
        onSubmit={onSubmit}
        edition={!!route.params?.edition}
        scheduled={!!route.params?.scheduled}
      />
    </SafeArea>
  );
};

export default PaymentController;
