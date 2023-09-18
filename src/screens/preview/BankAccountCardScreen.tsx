import React from 'react';
import {
  SafeArea, Text, BankAccountCard, Container,
} from 'components';
import Theme from 'theme';
import { CopyIcon, TrashIcon } from 'assets/svg';

const BankAccountCardScreen: React.FC = () => (
  <SafeArea>
    <Text
      text="BankAccountCard"
      typography="title"
      marginHorizontal={Theme.Sizes.Padding}
      marginTop={Theme.Sizes.MarginTop}
      textAlign="center"
    />
    <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
      <BankAccountCard
        onPress={() => {}}
        marginTop={40}
        backgroundColor={Theme.Colors.WhiteSmoke}
        textNumbers="4443 3223 6544 645344"
        label="CLABE"
        icon={<CopyIcon />}
        marginBottom={15}
      />
      <BankAccountCard
        onPress={() => {}}
        backgroundColor={Theme.Colors.PlaceboBlue}
        textNumbers="4443 3223 6544 645344"
        label="CLABE Santander"
        icon={<TrashIcon />}
        labelAlignment="bottom"
      />
    </Container>
  </SafeArea>
);

export default BankAccountCardScreen;
