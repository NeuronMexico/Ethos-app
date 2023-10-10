import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Text } from 'components';
import Theme from 'theme';
import { ClabeCard } from './NumberCard';

interface Props {
  onPressCashPayment: () => void;
  onPressDirectDebitPayment: () => void;
}

const PayCardBottomSheetContent: React.FC<Props> = ({ onPressCashPayment, onPressDirectDebitPayment }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ClabeCard number="7428 1096 3524 197853" />

      <Container row>
        <Container flex alignment="end" style={{ marginRight: 4 }}>
          <Text text={t('cards:beneficiary')} typography="header" fontWeight="Bold" />
          <Text text="Mario Bárcenas" typography="caption" marginTop={8} />
        </Container>
        <Container flex style={{ marginLeft: 4 }}>
          <Text text={t('cards:institution')} typography="header" fontWeight="Bold" />
          <Text text="STP" typography="caption" marginTop={8} />
        </Container>
      </Container>

      <Button label={t('cards:cashPayment')} onPress={onPressCashPayment} marginVertical={20} />
      <Button
        label={t('cards:directDebitPayment')}
        onPress={onPressDirectDebitPayment}
        backgroundColor={Theme.Colors.WhiteSmoke}
        textColor={Theme.Colors.DarkSoul}
      />
    </Container>
  );
};

export { PayCardBottomSheetContent };
