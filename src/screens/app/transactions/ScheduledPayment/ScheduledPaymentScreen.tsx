import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Header } from 'components';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';
import { ScheduledPaymentForm } from './components';

interface Props {
  onSubmit: () => void;
  edition: boolean;
}

const ScheduledPaymentScreen: React.FC<Props> = ({ onSubmit, edition }) => {
  const { t } = useTranslation();

  return (
    <Container flex useKeyboard>
      <Header title={t(`transactions:${edition ? 'editPayment' : 'newScheduledPayment'}`)} />
      <ScrollView
        style={{ flex: 1, marginTop: 4 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 28, paddingBottom: 32 }}
        keyboardShouldPersistTaps="handled"
      >
        <ScheduledPaymentForm onSubmit={onSubmit} edition={edition} />
      </ScrollView>
    </Container>
  );
};

export default ScheduledPaymentScreen;
