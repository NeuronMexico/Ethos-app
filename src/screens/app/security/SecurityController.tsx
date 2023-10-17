import { SafeArea } from 'components';
import React from 'react';
import SecurityScreen from './SecurityScreen';

const SecurityController: React.FC = () => (
  <SafeArea>
    <SecurityScreen />
  </SafeArea>
);

export default SecurityController;
