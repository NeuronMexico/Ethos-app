import { SafeArea } from 'components';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParams } from 'utils';
import SecurityScreen from './SecurityScreen';

const SecurityController: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  const onChangePassword = () => { navigate('ChangePassword'); };
  return (
    <SafeArea>
      <SecurityScreen onChangePassword={onChangePassword} />
    </SafeArea>
  );
};
export default SecurityController;
