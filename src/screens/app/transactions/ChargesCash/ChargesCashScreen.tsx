import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Header, MultipleTextButton } from 'components';
import Theme from 'theme';
import { StyleSheet } from 'react-native';
import { MapIcon, PasscodeIcon } from 'assets/svg';

interface Props {
  onPressCash: () => void;
  onPressEstablishments: () => void;
}

const ChargesCashScreen: React.FC<Props> = ({
  onPressCash,
  onPressEstablishments,
}: Props) => {
  const { t } = useTranslation();
  const { iconContainer } = styles;

  return (
    <Container flex>
      <Header title={t('charges:chargeWithCash')} showVirtualAssistantAction />

      <Container style={{ marginHorizontal: Theme.Sizes.Padding }}>
        <MultipleTextButton
          title={t('transactions:generateCode')}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={Theme.Sizes.MarginTop}
          alignContent="space-between"
          onPress={onPressCash}
          icon={<Container style={iconContainer}><PasscodeIcon /></Container>}
        />
        <MultipleTextButton
          title={t('transactions:checkEstablishments')}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={Theme.Sizes.MarginTop}
          alignContent="space-between"
          onPress={onPressEstablishments}
          icon={<Container style={iconContainer}><MapIcon /></Container>}
        />
      </Container>
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

export default ChargesCashScreen;
