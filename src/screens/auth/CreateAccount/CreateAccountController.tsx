import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { AuthStackParams } from 'utils';
import CreateAccountScreen from './CreateAccountScreen';

interface Props extends NativeStackScreenProps<AuthStackParams, 'CreateAccount'> {}

const CreateAccountController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <CreateAccountScreen onSubmit={() => navigation.navigate('UserValidation')} />
    </SafeArea>
  );
};

export default CreateAccountController;
