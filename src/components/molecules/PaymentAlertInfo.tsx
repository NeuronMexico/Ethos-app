import React from 'react';
import { Container, Text } from 'components';
import { formatQuantity } from 'utils';
import { useTranslation } from 'react-i18next';

interface Props {
  amount?: number;
  paymentType: string;
  payee: string;
  bank: string;
  concept: string;
  reference?: string;
}

const PaymentAlertInfo: React.FC<Props> = ({
  amount, paymentType, payee, bank, concept, reference,
}) => {
  const { t } = useTranslation();

  return (
    <Container center>
      {amount !== undefined && <Text text={formatQuantity(amount)} fontSize={34} fontWeight="Bold" />}
      <Text text={t('transactions:paymentType')} typography="caption" marginTop={amount !== undefined ? 10 : 0} />
      <Text text={paymentType} typography="header" fontWeight="Bold" marginTop={8} />

      <Text text={t('transactions:payee')} typography="caption" marginTop={10} />
      <Text text={payee} typography="header" fontWeight="Bold" marginTop={8} />

      <Text text={t('form:bank')} typography="caption" marginTop={10} />
      <Text text={bank} typography="header" fontWeight="Bold" marginTop={8} />

      <Text text={t('form:concept')} typography="caption" marginTop={10} />
      <Text text={concept} typography="header" fontWeight="Bold" marginTop={8} />

      {!!reference && (
      <>
        <Text text={t('form:reference')} typography="caption" marginTop={10} />
        <Text text={reference} typography="header" fontWeight="Bold" marginTop={8} />
      </>
      )}
    </Container>
  );
};

export { PaymentAlertInfo };
