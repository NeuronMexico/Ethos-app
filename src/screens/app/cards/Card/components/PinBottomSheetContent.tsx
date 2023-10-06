import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, MultipleTextButton, Text } from 'components';
import Theme from 'theme';
import { KeyCycleIcon } from 'assets/svg';

interface Props {
  onPressChangePin: () => void;
}

const PinBottomSheetContent: React.FC<Props> = ({ onPressChangePin }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Container row center space="between">
        <Text text={t('cards:viewPin')} typography="header" fontWeight="Bold" />
        <Container style={styles.pinContainer}>
          <Text text="7831" typography="caption" fontWeight="Bold" />
        </Container>
      </Container>

      <MultipleTextButton
        title={t('cards:changePin')}
        borderRadius={24}
        borderColor={Theme.Colors.PlaceboBlue}
        labelColor={Theme.Colors.DarkSoul}
        marginTop={16}
        icon={<Container style={styles.pinIconContainer}><KeyCycleIcon /></Container>}
        alignContent="flex-start"
        androidRippleColor={Theme.Colors.DarkSoul}
        onPress={onPressChangePin}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  pinContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: Theme.Colors.PlaceboBlue,
  },
  pinIconContainer: {
    padding: 8,
    borderRadius: 14,
    backgroundColor: Theme.Colors.PlaceboBlue,
  },
});

export { PinBottomSheetContent };
