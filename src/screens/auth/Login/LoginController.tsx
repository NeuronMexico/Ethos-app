import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import LoginScreen from './LoginScreen';

const LoginController: React.FC = () => {
  const dispatch = useDispatch();

  const onPressLogin = () => {};
  const onPressRegister = () => {};

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
