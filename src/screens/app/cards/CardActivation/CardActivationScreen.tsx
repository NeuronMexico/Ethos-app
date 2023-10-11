import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, Header, MultipleTextButton, Text,
} from 'components';
import Theme from 'theme';
import { ScanIcon } from 'assets/svg';
import { CardForm } from './components';

interface Props {
  onSubmit: () => void;
}

const CardActivationScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Container flex useKeyboard>
      <Header title={t('cards:activateCard')} />
      <ScrollView
        style={{ marginTop: 4 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, paddingVertical: 12, flexGrow: 1 }}
      >
        <MultipleTextButton
          onPress={() => {}}
          title={t('cards:scanCard')}
          borderRadius={24}
          borderColor={Theme.Colors.PlaceboBlue}
          labelColor={Theme.Colors.DarkSoul}
          icon={<Container style={styles.iconContainer}><ScanIcon /></Container>}
          alignContent="flex-start"
          androidRippleColor={Theme.Colors.DarkSoul}
        />

        <Text text={`-${t('cards:or')}-`} typography="header" marginVertical={16} textAlign="center" />

        <Text text={t('cards:enterCardDetails')} typography="header" />
        <CardForm onSubmit={onSubmit} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 8,
    borderRadius: 14,
    backgroundColor: Theme.Colors.PlaceboBlue,
  },
});

export default CardActivationScreen;
