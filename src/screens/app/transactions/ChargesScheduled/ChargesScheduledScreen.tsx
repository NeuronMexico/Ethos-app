import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  Container, Header, MultipleTextButton, Text,
} from 'components';
import Theme from 'theme';
import { formatQuantity } from 'utils';

interface Props {
  onPressCharge: () => void;
}

const ChargesScheduledScreen: React.FC<Props> = ({
  onPressCharge = () => {},
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header title={t('charges:chargesScheduled')} />
      <ScrollView contentContainerStyle={{ paddingTop: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}>
        <Text
          text={t('charges:pending')}
          typography="subtitle"
          fontWeight="Semibold"
          textColor={Theme.Colors.GreatFalls}
        />
        <MultipleTextButton
          onPress={onPressCharge}
          title="Andrés Lara"
          label="Septiembre 29, 2023 19:14:23 hr"
          rightText={formatQuantity(2500)}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={16}
          alignContent="space-between"
          fontSize={Theme.Sizes.Body}
          fontWeight="Regular"
          rightFontWeight="Semibold"
        />
        <MultipleTextButton
          onPress={onPressCharge}
          title="Cobro en efectivo"
          label="Septiembre 19, 2023 10:14:23 hr"
          rightText={formatQuantity(2000)}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={16}
          alignContent="space-between"
          fontSize={Theme.Sizes.Body}
          fontWeight="Regular"
          rightFontWeight="Semibold"
        />
        <Text
          text={t('charges:settled')}
          typography="subtitle"
          fontWeight="Semibold"
          textColor={Theme.Colors.GreatFalls}
          marginTop={16}
        />
        <MultipleTextButton
          onPress={onPressCharge}
          title="Julio Mercado"
          label="Junio 29, 2023 19:04:23 hr"
          rightText={formatQuantity(350)}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={16}
          alignContent="space-between"
          fontSize={Theme.Sizes.Body}
          fontWeight="Regular"
          rightFontWeight="Semibold"
        />
        <MultipleTextButton
          onPress={onPressCharge}
          title="Rafael Montoya"
          label="Marzo 15, 2023 19:04:23 hr"
          rightText={formatQuantity(240)}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={16}
          alignContent="space-between"
          fontSize={Theme.Sizes.Body}
          fontWeight="Regular"
          rightFontWeight="Semibold"
        />
      </ScrollView>
    </Container>
  );
};

export default ChargesScheduledScreen;
