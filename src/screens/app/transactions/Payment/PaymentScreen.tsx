import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Container, Header } from 'components';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';
import { ScheduledPaymentForm } from './components';

interface Props {
  onSubmit: () => void;
  edition: boolean;
  scheduled: boolean;
}

const PaymentScreen: React.FC<Props> = ({ onSubmit, edition, scheduled }) => {
  const { t } = useTranslation();

  const title = useMemo(() => {
    if (edition) return t('transactions:editPayment');

    if (scheduled) return t('transactions:newScheduledPayment');

    return t('global:pay');
  }, [edition, scheduled, t]);

  return (
    <Container flex useKeyboard>
      <Header title={title} />
      <ScrollView
        style={{ flex: 1, marginTop: 4 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 28, paddingBottom: 32 }}
        keyboardShouldPersistTaps="handled"
      >
        <ScheduledPaymentForm onSubmit={onSubmit} edition={edition} scheduled={scheduled} />
      </ScrollView>
    </Container>
  );
};

export default PaymentScreen;
