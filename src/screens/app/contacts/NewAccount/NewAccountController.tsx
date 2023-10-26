import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import NewAccountScreen from './NewAccountScreen';

const NewAccountController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <NewAccountScreen onSubmit={(data) => console.log(data)} />
    </SafeArea>
  );
};

export default NewAccountController;
