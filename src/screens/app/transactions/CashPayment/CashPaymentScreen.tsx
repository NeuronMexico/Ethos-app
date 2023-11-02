import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, Header, MultipleTextButton,
} from 'components';
import Theme from 'theme';
import { FileDockAddIcon, MapIcon } from 'assets/svg';

interface Props {
  onPressGenerateQR: () => void;
  onPressEstablishments: () => void;
}

const CashPaymentScreen: React.FC<Props> = ({ onPressGenerateQR, onPressEstablishments }) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header title={t('transactions:cashPayment')} showVirtualAssistantAction />

      <Container style={{ marginHorizontal: Theme.Sizes.Padding }}>
        <MultipleTextButton
          title={t('transactions:generateCode')}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={Theme.Sizes.MarginTop}
          alignContent="space-between"
          onPress={onPressGenerateQR}
          icon={<Container style={styles.iconContainer}><FileDockAddIcon /></Container>}
        />
        <MultipleTextButton
          title={t('transactions:checkEstablishments')}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={Theme.Sizes.MarginTop}
          alignContent="space-between"
          onPress={onPressEstablishments}
          icon={<Container style={styles.iconContainer}><MapIcon /></Container>}
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

export default CashPaymentScreen;
