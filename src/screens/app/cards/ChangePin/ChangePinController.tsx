import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import ChangePinScreen from './ChangePinScreen';

const ChangePinController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <ChangePinScreen />
    </SafeArea>
  );
};

export default ChangePinController;
