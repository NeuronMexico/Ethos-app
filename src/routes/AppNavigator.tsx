import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ENVIRONMENT } from 'config/config';
import { RootState } from 'reactRedux';
import AuthStack from './AuthStack';
import PreviewStack from './PreviewStack';
import AppStack from './AppStack';

const AppNavigator: React.FC = () => {
  const { isLogged } = useSelector((state: RootState) => state.session);

  useEffect(() => {
    console.info(`Environment: ${ENVIRONMENT}`);
  }, []);

  // return <PreviewStack />;

  if (isLogged) {
    return (<AppStack />);
  }

  return (<AuthStack />);
};

export default AppNavigator;
