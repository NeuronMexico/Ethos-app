import React from 'react';
import {
  Container,
  FadeInImage,
  MultipleTextButton,
  SafeArea, Text,
} from 'components';
import Theme from 'theme';
import { Image } from 'react-native';
import { TELCEL_LOGO } from 'assets/images';

const MultipleTextButtonScreen: React.FC = () => {
  // eslint-disable-next-line max-len
  const HOMER_URI = 'https://static.wikia.nocookie.net/lossimpson/images/b/bd/Homer_Simpson.png/revision/latest?cb=20100522180809&path-prefix=es';

  return (
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
        <MultipleTextButton
          onPress={() => {}}
          title="Telcel"
          borderRadius={24}
          borderColor={Theme.Colors.PlaceboBlue}
          labelColor={Theme.Colors.DarkSoul}
          marginBottom={20}
          icon={<Image source={TELCEL_LOGO} />}
          label="Telefonía celular"
          alignContent="space-start"
        />
        <MultipleTextButton
          onPress={() => {}}
          title="Telcel"
          borderRadius={24}
          borderColor={Theme.Colors.PlaceboBlue}
          labelColor={Theme.Colors.DarkSoul}
          marginBottom={20}
          icon={<Image source={TELCEL_LOGO} />}
          alignContent="space-start"
        />
        <MultipleTextButton
          onPress={() => {}}
          title="Ayush Lagun"
          borderRadius={24}
          paddingVertical={16}
          backgroundColor={Theme.Colors.DrWhite}
          labelColor={Theme.Colors.DarkSoul}
          marginBottom={20}
          icon={<FadeInImage source={{ uri: HOMER_URI }} width={50} height={50} />}
          alignContent="space-start"
        />
      </Container>
    </SafeArea>
  );
};

export default MultipleTextButtonScreen;
