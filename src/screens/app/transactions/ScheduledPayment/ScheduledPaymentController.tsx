import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { Container, SafeArea, Text } from 'components';
import { useAlert } from 'context';
import { TransactionsGlobalStackParams, formatQuantity } from 'utils';
import EditPaymentScreen from './ScheduledPaymentScreen';

interface Props extends NativeStackScreenProps<TransactionsGlobalStackParams, 'ScheduledPayment'> {}

const ScheduledPaymentController: React.FC<Props> = ({ navigation, route }) => {
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
        <Container center>
          <Text text={formatQuantity(2000)} fontSize={34} fontWeight="Bold" />
          <Text text={t('transactions:paymentType')} typography="caption" marginTop={10} />
          <Text text={t('transactions:singlePayment')} typography="header" fontWeight="Bold" marginTop={8} />

          <Text text={t('transactions:payee')} typography="caption" marginTop={10} />
          <Text text="Mario Telles" typography="header" fontWeight="Bold" marginTop={8} />

          <Text text={t('form:bank')} typography="caption" marginTop={10} />
          <Text text="STP" typography="header" fontWeight="Bold" marginTop={8} />

          <Text text={t('form:concept')} typography="caption" marginTop={10} />
          <Text text="Pago a Mario Telles" typography="header" fontWeight="Bold" marginTop={8} />
        </Container>
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
      <EditPaymentScreen onSubmit={onSubmit} edition={!!route.params?.edition} />
    </SafeArea>
  );
};

export default ScheduledPaymentController;
