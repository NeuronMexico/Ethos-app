import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SafeArea } from 'components';
import EthosCreditScreen from './EthosCreditScreen';

const EthosCreditController: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeArea>
      <EthosCreditScreen onPressShortcuts={() => navigate('GlobalStack', { screen: 'Shortcuts' })} />
    </SafeArea>
  );
};

export default EthosCreditController;
