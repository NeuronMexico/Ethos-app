import React from 'react';
import {
  Container, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import {
  CellphoneIcon,
  LessIcon, MoneyIcon, MoreIcon, PadlockIcon,
} from 'assets/svg';
import { OptionButton } from 'components/molecules/OptionButton';

const OptionButtonScreen: React.FC = () => (
  <SafeArea>
    <Text
      text="Option Button"
      typography="title"
      marginHorizontal={Theme.Sizes.Padding}
      marginTop={Theme.Sizes.MarginTop}
      textAlign="center"
      marginBottom={20}
    />
    <Container
      row
      center
      style={{ paddingHorizontal: Theme.Sizes.Padding }}
    >
      <OptionButton
        onPress={() => {}}
        width={64}
        height={64}
        borderRadius={27}
        backgroundColor={Theme.Colors.PlaceboBlue}
        marginHorizontal={5}
        label="Apagar tarjeta"
        icon={<PadlockIcon />}
        marginRight={15}
      />
      <OptionButton
        onPress={() => {}}
        width={64}
        height={64}
        borderRadius={27}
        backgroundColor={Theme.Colors.PlaceboBlue}
        marginRight={25}
        label="Pagos estatales y municipales"
        icon={<MoneyIcon />}
        actionIcon={<MoreIcon color={Theme.Colors.White} />}
      />
      <OptionButton
        onPress={() => {}}
        width={64}
        height={64}
        borderRadius={27}
        backgroundColor={Theme.Colors.PlaceboBlue}
        marginRight={25}
        label="Recargas"
        icon={<CellphoneIcon />}
        actionIconColor={Theme.Colors.WintersBreath}
        actionIcon={<LessIcon color={Theme.Colors.White} />}
      />
    </Container>
  </SafeArea>
);

export default OptionButtonScreen;
