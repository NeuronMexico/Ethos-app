import { Button, Container, SafeArea } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBottomSheet } from 'context';
import Theme from 'theme';
import BillsScreen from './BillsScreen';

const SecurityController: React.FC = () => {
  const { t } = useTranslation();
  const bottomSheet = useBottomSheet();

  const content = () => (
    <Container center style={{ gap: 16 }}>
      <Button
        label={t('bills:downloadPDF')}
        onPress={() => {}}
        backgroundColor="trasparent"
        textColor={Theme.Colors.DarkSoul}
        borderColor={Theme.Colors.PlaceboBlue}
      />
      <Button
        label={t('bills:downloadXML')}
        onPress={() => {}}
        backgroundColor="trasparent"
        textColor={Theme.Colors.DarkSoul}
        borderColor={Theme.Colors.PlaceboBlue}
      />
    </Container>
  );

  const onPressBill = () => {
    bottomSheet.show(content());
  };

  return (
    <SafeArea>
      <BillsScreen onPressBill={onPressBill} />
    </SafeArea>
  );
};
export default SecurityController;
