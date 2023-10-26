import React, { useCallback } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { PaymentAlertInfo, SafeArea } from 'components';
import { useAlert } from 'context';
import { TransactionsGlobalStackParams } from 'utils';
import PaymentScreen from './PaymentScreen';

const PaymentController: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation<NativeStackNavigationProp<any>>();
  const { params } = useRoute<RouteProp<TransactionsGlobalStackParams, 'Payment'>>();
  const { t } = useTranslation();

  const alert = useAlert();

  const onSubmit = useCallback(() => {
    if (params?.edition || params?.scheduled) {
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
            goBack();
          },
          type: 'primary',
        }],
      });
    } else navigate('CardsGlobalStack', { screen: 'CashPayment' });
  }, [alert, goBack, navigate, params, t]);

  return (
    <SafeArea>
      <PaymentScreen
        onSubmit={onSubmit}
        edition={!!params?.edition}
        scheduled={!!params?.scheduled}
      />
    </SafeArea>
  );
};

export default PaymentController;
