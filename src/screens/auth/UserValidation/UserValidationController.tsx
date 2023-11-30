import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import UserValidationScreen from './UserValidationScreen';

const UserValidationController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <UserValidationScreen />
    </SafeArea>
  );
};

export default UserValidationController;
