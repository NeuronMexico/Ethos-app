import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Text } from 'components';
import Theme from 'theme';
import { ClabeCard } from './ClabeCard';

interface Props {
}

const PayCardBottomSheetContent: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ClabeCard clabe="4443 3223 6544 645344" />

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

      <Button label={t('cards:cashPayment')} onPress={() => {}} marginVertical={20} />
      <Button
        label={t('cards:directDebitPayment')}
        onPress={() => {}}
        backgroundColor={Theme.Colors.WhiteSmoke}
        textColor={Theme.Colors.DarkSoul}
      />
    </Container>
  );
};

export { PayCardBottomSheetContent };
