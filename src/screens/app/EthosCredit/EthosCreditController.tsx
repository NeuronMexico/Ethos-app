import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EthosCreditScreen from './EthosCreditScreen';

const EthosCreditController: React.FC = () => {
  const dispatch = useDispatch();

  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeArea>
      <EthosCreditScreen onPressProfile={() => navigate('ProfileStack', { screen: 'Profile' })} />
    </SafeArea>
  );
};

export default EthosCreditController;
