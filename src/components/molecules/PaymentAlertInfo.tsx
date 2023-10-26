import React from 'react';
import { Container, Text } from 'components';
import { formatDate, formatQuantity } from 'utils';
import { useTranslation } from 'react-i18next';

interface Props {
  amount?: number;
  paymentType: string;
  nextPaymentDate?: Date;
  payee?: string;
  bank: string;
  concept?: string;
  reference?: string;
  cardNumber?: string;
}

const PaymentAlertInfo: React.FC<Props> = ({
  amount, paymentType, nextPaymentDate, payee, bank, concept, reference, cardNumber,
}) => {
  const { t } = useTranslation();

  return (
    <Container center>
      {amount !== undefined && <Text text={formatQuantity(amount)} fontSize={34} fontWeight="Bold" />}
      <Text text={t('transactions:paymentType')} typography="caption" marginTop={amount !== undefined ? 10 : 0} />
      <Text text={paymentType} typography="header" fontWeight="Bold" marginTop={8} />

      {!!payee && (
        <>
          <Text text={t('transactions:payee')} typography="caption" marginTop={10} />
          <Text text={payee} typography="header" fontWeight="Bold" marginTop={8} />
        </>
      )}

      {nextPaymentDate && (
      <>
        <Text text={t('transactions:nextPaymentDate')} typography="caption" marginTop={10} />
        <Text
          text={formatDate(nextPaymentDate, 'MMMM dd, yyyy')}
          typography="header"
          fontWeight="Bold"
          marginTop={8}
          transform="capitalize"
        />
      </>
      )}

      <Text text={t('form:bank')} typography="caption" marginTop={10} />
      <Text text={bank} typography="header" fontWeight="Bold" marginTop={8} />

      {!!concept && (
        <>
          <Text text={t('form:concept')} typography="caption" marginTop={10} />
          <Text text={concept} typography="header" fontWeight="Bold" marginTop={8} />
        </>
      )}

      {!!reference && (
      <>
        <Text text={t('form:reference')} typography="caption" marginTop={10} />
        <Text text={reference} typography="header" fontWeight="Bold" marginTop={8} />
      </>
      )}

      {!!cardNumber && (
      <>
        <Text text={t('transactions:creditCardPayment', { cardNumber })} typography="caption" marginTop={10} />
        <Text text={t('transactions:directDebit')} typography="header" fontWeight="Bold" marginTop={8} />
      </>
      )}
    </Container>
  );
};

export { PaymentAlertInfo };
