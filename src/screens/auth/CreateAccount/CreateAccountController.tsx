import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import CreateAccountScreen from './CreateAccountScreen';

const CreateAccountController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <CreateAccountScreen />
    </SafeArea>
  );
};

export default CreateAccountController;
