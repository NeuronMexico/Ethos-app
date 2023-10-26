import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '@react-native-community/slider';
import { Button, Container, Text } from 'components';
import { CardIncrementIllustration } from 'assets/svg';
import { formatQuantity } from 'utils';
import Theme from 'theme';

const CURRENT_LIMIT = 70000;

interface Props {
  onSubmit: (newLimit: number) => void;
}

const CreditLineIncreaseBottomSheetContent: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const [creditLimit, setCreditLimit] = useState<number>(CURRENT_LIMIT);

  return (
    <Container>
      <CardIncrementIllustration style={{ alignSelf: 'center' }} />
      <Text text={formatQuantity(creditLimit)} marginVertical={21} fontSize={24} fontWeight="Bold" textAlign="center" />
      <Text
        text={t('cards:slideToAdjustYourNewCreditLimit')}
        typography="subtitle"
        fontWeight="Medium"
        textAlign="center"
      />
      <Slider
        style={{ marginVertical: 13 }}
        value={creditLimit}
        step={10}
        minimumValue={0}
        maximumValue={150000}
        minimumTrackTintColor={Theme.Colors.SpringBouquet}
        maximumTrackTintColor={Theme.Colors.LightHouse}
        onValueChange={(value) => setCreditLimit(value)}
      />
      <Text
        text={formatQuantity(CURRENT_LIMIT)}
        typography="header"
        fontWeight="Bold"
        textAlign="center"
      />
      <Text
        text={t('cards:currentLimit')}
        typography="caption"
        textAlign="center"
        marginTop={4}
      />

      <Button label={t('global:accept')} onPress={() => onSubmit(creditLimit)} marginTop={16} />
    </Container>
  );
};

export { CreditLineIncreaseBottomSheetContent };
