import React from 'react';
import {
  Container, SafeArea, Text, ButtonGroup, ButtonGroupOption,
} from 'components';
import Theme from 'theme';
import { ScrollView } from 'react-native';

const OPTIONS: Array<ButtonGroupOption> = [{
  label: 'Alímentos y bebidas',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.LiquidLava,
    textColor: Theme.Colors.DarkSoul,
  },
},
{
  label: 'Gasolina',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.HuelvenoHorizon,
    textColor: Theme.Colors.DarkSoul,
  },
},
{
  label: 'Departamental',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.TurquoisePanic,
    textColor: Theme.Colors.DarkSoul,
  },
},
{
  label: 'Salud',
  onPress: () => {},
  buttonStyle: {
    backgroundColor: Theme.Colors.SchiaparelliPink,
    textColor: Theme.Colors.DarkSoul,
  },
},
{
  label: 'Entretenimiento',
  onPress: () => {},
}];

const ButtonGroupScreen: React.FC = () => (
  <SafeArea>
    <Text
      text="ButtonGroup"
      typography="title"
      marginHorizontal={Theme.Sizes.Padding}
      marginTop={Theme.Sizes.MarginTop}
      textAlign="center"
    />
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding }}
    >
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="Default component" typography="subtitle" marginVertical={8} />
        <ButtonGroup options={OPTIONS} />

        <Text text="Custom margins" typography="subtitle" marginVertical={8} />
        <ButtonGroup options={OPTIONS} verticalSpaceBetween={20} horizontalSpaceBetween={10} />

        <Text text="Custom button paddings" typography="subtitle" marginVertical={8} />
        <ButtonGroup options={OPTIONS} buttonVerticalPadding={10} buttonHorizontalPadding={30} />

        <Text text="Vertical" typography="subtitle" marginVertical={8} />
        <ButtonGroup options={OPTIONS} vertical />

        <Text text="Custom vertical alignment" typography="subtitle" marginVertical={8} />
        <ButtonGroup options={OPTIONS} vertical verticalAlignment="right" />
      </Container>
    </ScrollView>
  </SafeArea>
);

export default ButtonGroupScreen;
