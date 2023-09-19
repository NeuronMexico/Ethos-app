import React from 'react';
import {
  Container, SafeArea, Text, SwipeableSwitch,
} from 'components';
import Theme from 'theme';
import { EyeIcon, EyeSlashIcon } from 'assets/svg';

const SwipeableSwitchScreen: React.FC = () => (
  <SafeArea>
    <Text
      text="SwipeableSwitch"
      typography="title"
      marginHorizontal={Theme.Sizes.Padding}
      marginTop={Theme.Sizes.MarginTop}
      textAlign="center"
    />
    <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
      <Text text="Default component" typography="subtitle" marginVertical={8} />
      <SwipeableSwitch
        config={{ label: { active: 'Active Label', inactive: 'Inactive Label' } }}
        onChange={(isActive) => console.log({ isActive })}
      />

      <Text text="Default value" typography="subtitle" marginVertical={8} />
      <SwipeableSwitch
        config={{ label: { active: 'Active Label', inactive: 'Inactive Label' } }}
        onChange={(isActive) => console.log({ isActive })}
        // eslint-disable-next-line react/jsx-boolean-value
        defaultValue={true}
      />

      <Text text="Fully configured" typography="subtitle" marginVertical={8} />
      <SwipeableSwitch
        config={{
          label: { active: 'Active Label', inactive: 'Inactive Label' },
          buttonColor: { active: 'blue', inactive: 'red' },
          labelColor: { active: 'black', inactive: 'gray' },
        }}
        onChange={(isActive) => console.log({ isActive })}
      />

      <Text text="Custom icons" typography="subtitle" marginVertical={8} />
      <SwipeableSwitch
        config={{ label: { active: 'Active Label', inactive: 'Inactive Label' } }}
        activeIcon={<EyeIcon color="white" />}
        inactiveIcon={<EyeSlashIcon color="white" />}
        onChange={(isActive) => console.log({ isActive })}
      />
    </Container>
  </SafeArea>
);

export default SwipeableSwitchScreen;
