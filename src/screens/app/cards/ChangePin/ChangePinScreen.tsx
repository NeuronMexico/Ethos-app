import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button, Container, Header, Text,
} from 'components';
import Theme from 'theme';
import { PinInput } from './components';

interface Props {
  onSubmit: () => void;
}

const ChangePinScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const [newPin, setNewPin] = useState<string>('');
  const [confirmationPin, setConfirmationPin] = useState<string>('');

  return (
    <Container flex useKeyboard>
      <Header title={t('cards:changePin')} />

      <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
        <Text text={t('cards:enterNewPin')} />
        <PinInput value={newPin} onChangeText={setNewPin} />

        <Text text={t('cards:confirmNewPin')} />
        <PinInput value={confirmationPin} onChangeText={setConfirmationPin} />

        <Container flex alignment="end" width="100%">
          <Button label={t('global:continue')} onPress={onSubmit} marginVertical={16} />
        </Container>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: Theme.Sizes.Padding,
    paddingTop: 32,
    alignItems: 'center',
    flexGrow: 1,
  },
});

export default ChangePinScreen;
