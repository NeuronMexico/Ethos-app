import { SafeArea } from 'components';
import React from 'react';
import { useDispatch } from 'reactRedux';
import { AuthStackParams } from 'utils';
import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ValidatedInformationScreen from './ValidatedInformationScreen';

interface Props extends NativeStackScreenProps<AuthStackParams, 'ValidatedInformation'> {}

const ValidatedInformationController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { params: { success } } = useRoute<RouteProp<AuthStackParams, 'ValidatedInformation'>>();

  return (
    <SafeArea>
      <ValidatedInformationScreen
        success={success}
        onContinue={() => navigation.navigate('ContractDetails')}
        onBack={navigation.goBack}
      />
    </SafeArea>
  );
};

export default ValidatedInformationController;
