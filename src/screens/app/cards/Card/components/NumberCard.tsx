import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
import { Container, Text, Touchable } from 'components';
import Theme from 'theme';
import { CopyIcon } from 'assets/svg';

interface Props {
  number: string;
  showClabeLabel?: boolean;
}

const ClabeCard: React.FC<Props> = ({ number, showClabeLabel = true }) => {
  const { t } = useTranslation();

  const copyToClipboard = useCallback(() => {
    Clipboard.setString(number);
    Toast.show(t('cards:numberCopiedToClipboard'), Toast.SHORT);
  }, [number, t]);

  return (
    <Container row space="between" center style={styles.clabeContainer}>
      {showClabeLabel ? <Text text={t('cards:clabe')} typography="caption" /> : <Container width={24} />}
      <Text text={number} typography="header" />
      <Touchable onPress={copyToClipboard} hitSlop={15}>
        <CopyIcon />
      </Touchable>
    </Container>
  );
};

const styles = StyleSheet.create({
  clabeContainer: {
    padding: 17,
    backgroundColor: Theme.Colors.WhiteSmoke,
    borderRadius: 16,
    marginBottom: 16,
  },
});

export { ClabeCard };
