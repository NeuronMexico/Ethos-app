import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { Container, SafeArea, Text } from 'components';
import { useAlert } from 'context';
import { formatQuantity } from 'utils';
import EditPaymentScreen from './EditPaymentScreen';

const EditPaymentController: React.FC = () => {
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

          <Text text={t('transactions:bank')} typography="caption" marginTop={10} />
          <Text text="STP" typography="header" fontWeight="Bold" marginTop={8} />

          <Text text={t('transactions:concept')} typography="caption" marginTop={10} />
          <Text text="Pago a Mario Telles" typography="header" fontWeight="Bold" marginTop={8} />
        </Container>
      ),
    });
  }, [alert, t]);

  return (
    <SafeArea>
      <EditPaymentScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default EditPaymentController;
