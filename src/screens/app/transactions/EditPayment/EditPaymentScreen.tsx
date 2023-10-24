import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Header } from 'components';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';
import { EditPaymentForm } from './components';

interface Props {
  onSubmit: () => void;
}

const EditPaymentScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Container flex useKeyboard>
      <Header title={t('transactions:editPayment')} />
      <ScrollView
        style={{ flex: 1, marginTop: 4 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 28, paddingBottom: 32 }}
      >
        <EditPaymentForm onSubmit={onSubmit} />
      </ScrollView>
    </Container>
  );
};

export default EditPaymentScreen;
