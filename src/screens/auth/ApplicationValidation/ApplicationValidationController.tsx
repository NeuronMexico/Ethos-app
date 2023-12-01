import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { AuthStackParams } from 'utils';
import ApplicationValidationScreen from './ApplicationValidationScreen';

interface Props extends NativeStackScreenProps<AuthStackParams, 'ApplicationValidation'> {}

const ApplicationValidationController: React.FC<Props> = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <ApplicationValidationScreen onContinue={() => navigation.navigate('ValidatedInformation', { success: false })} />
    </SafeArea>
  );
};

export default ApplicationValidationController;
