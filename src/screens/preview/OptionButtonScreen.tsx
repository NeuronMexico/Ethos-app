import React from 'react';
import {
  Container, Header, SafeArea,
} from 'components';
import Theme from 'theme';
import {
  CellphoneIcon,
  LessIcon, LockClosedIcon, MoneyIcon, MoreIcon,
} from 'assets/svg';
import { OptionButton } from 'components/molecules/OptionButton';

const OptionButtonScreen: React.FC = () => (
  <SafeArea>
    <Header
      title="Option Button"
    />
    <Container
      flex
      row
      space="between"
      center
      style={{ padding: Theme.Sizes.Padding }}
    >
      <OptionButton
        onPress={() => {}}
        label="Apagar tarjeta"
        icon={<LockClosedIcon color={Theme.Colors.DarkSoul} />}
      />
      <OptionButton
        onPress={() => {}}
        label="Pagos estatales y municipales"
        icon={<MoneyIcon />}
        actionIcon={<MoreIcon color={Theme.Colors.White} />}
      />
      <OptionButton
        onPress={() => {}}
        label="Recargas"
        icon={<CellphoneIcon />}
        actionIconColor={Theme.Colors.WintersBreath}
        actionIcon={<LessIcon color={Theme.Colors.DarkSoul} />}
      />
    </Container>
  </SafeArea>
);

export default OptionButtonScreen;
