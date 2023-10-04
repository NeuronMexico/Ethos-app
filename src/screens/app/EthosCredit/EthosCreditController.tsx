import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  Container,
  SafeArea, SwipeableSwitch, Text,
} from 'components';
import { useBottomSheet } from 'context';
import EthosCreditScreen from './EthosCreditScreen';

const EthosCreditController: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const bottomSheet = useBottomSheet();

  const content = (
    <Container>
      <Text text="Default value" textAlign="left" typography="title" marginVertical={8} />
      <SwipeableSwitch
        config={{ label: { active: 'Active Label', inactive: 'Inactive Label' } }}
        onChange={(isActive) => console.log({ isActive })}
          // eslint-disable-next-line react/jsx-boolean-value
        defaultValue={true}
      />
    </Container>
  );

  const onPressShortcut = (id: string) => {
    if (id === 'turnOffCard') {
      bottomSheet.show(content);
    }
  };

  return (
    <SafeArea>
      <EthosCreditScreen
        onPressShortcuts={() => navigate('HomeGlobalStack', { screen: 'Shortcuts' })}
        onPressShortcut={onPressShortcut}
      />
    </SafeArea>
  );
};

export default EthosCreditController;
