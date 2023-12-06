import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { AuthStackParams } from 'utils';
import LoginScreen from './LoginScreen';

const LoginController: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProp<AuthStackParams, 'Login'>>();

  const onPressLogin = () => {};
  const onPressRegister = () => navigate('CreateAccount');

  return (
    <SafeArea>
      <LoginScreen
        onPressLogin={onPressLogin}
        onPressRegister={onPressRegister}
      />
    </SafeArea>
  );
};

export default LoginController;
