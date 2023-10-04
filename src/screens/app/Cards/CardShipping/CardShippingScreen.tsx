import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Header, Text } from 'components';
import Theme from 'theme';
import { CardShippingForm } from './components';

interface Props {
  onSubmit: () => void;
}

const CardShippingScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Container flex useKeyboard keyboardVerticalOffset={60}>
      <Header title={t('cards:cardShipping')} />
      <ScrollView
        style={{ marginTop: 8 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, paddingVertical: 24, flexGrow: 1 }}
      >
        <Text text={t('cards:chooseShippingAddress')} typography="header" />
        <CardShippingForm onSubmit={onSubmit} />
      </ScrollView>
    </Container>
  );
};

export default CardShippingScreen;
