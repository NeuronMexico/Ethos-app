import { SafeArea } from 'components';
import React from 'react';
import { useDispatch } from 'reactRedux';
import { AuthStackParams } from 'utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
