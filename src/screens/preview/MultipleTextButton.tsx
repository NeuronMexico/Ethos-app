import React from 'react';
import {
  Container,
  MultipleTextButton,
  SafeArea, Text,
} from 'components';
import Theme from 'theme';

const MultipleTextButtonScreen: React.FC = () => (
  <SafeArea>
    <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
      <Text
        text="MultipleTextButton"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <MultipleTextButton
        onPress={() => {}}
        title="Nueva solicitud de pago"
        rightText="$2,500.00"
        borderColor={Theme.Colors.PlaceboBlue}
        borderRadius={24}
        labelColor={Theme.Colors.DarkSoul}
        rightTextColor={Theme.Colors.DarkSoul}
        marginTop={20}
        marginBottom={20}
      />
      <MultipleTextButton
        onPress={() => {}}
        title="Pago a Mario Telles"
        label="Pago único"
        rightText="-$100.00"
        borderColor={Theme.Colors.PlaceboBlue}
        borderRadius={24}
        labelColor={Theme.Colors.DarkSoul}
        rightTextColor={Theme.Colors.DarkSoul}
        marginBottom={20}
      />
      <MultipleTextButton
        onPress={() => {}}
        title="Pago de tarjeta de crédito"
        label="Pago TDC"
        rightText="-$100.00"
        rightTextColor={Theme.Colors.SpringBouquet}
        barColor={Theme.Colors.SpringBouquet}
        marginBottom={20}
      />
    </Container>
  </SafeArea>
);

export default MultipleTextButtonScreen;
