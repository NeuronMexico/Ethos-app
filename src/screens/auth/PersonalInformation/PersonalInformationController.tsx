import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { AuthStackParams } from 'utils';
import PersonalInformationScreen from './PersonalInformationScreen';

interface Props extends NativeStackScreenProps<AuthStackParams, 'PersonalInformation'> {}

const PersonalInformationController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <PersonalInformationScreen onSubmit={() => navigation.navigate('ApplicationValidation')} />
    </SafeArea>
  );
};

export default PersonalInformationController;
