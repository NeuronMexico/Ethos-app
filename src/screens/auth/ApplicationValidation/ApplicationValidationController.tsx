import { SafeArea } from 'components';
import React from 'react';
import { useDispatch } from 'reactRedux';
import { AuthStackParams } from 'utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ApplicationValidationScreen from './ApplicationValidationScreen';

interface Props extends NativeStackScreenProps<AuthStackParams, 'ApplicationValidation'> {}

const ApplicationValidationController: React.FC<Props> = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <ApplicationValidationScreen onContinue={() => navigation.navigate('ApplicationValidation')} />
    </SafeArea>
  );
};

export default ApplicationValidationController;
