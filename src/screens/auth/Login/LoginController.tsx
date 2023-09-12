import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import LoginScreen from './LoginScreen';

const LoginController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <LoginScreen />
    </SafeArea>
  );
};

export default LoginController;
