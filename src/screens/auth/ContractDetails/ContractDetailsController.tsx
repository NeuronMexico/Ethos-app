import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeArea } from 'components';
import { AuthStackParams } from 'utils';
import ContractDetailsScreen from './ContractDetailsScreen';

interface Props extends NativeStackScreenProps<AuthStackParams, 'ContractDetails'> {}

const ContractDetailsController: React.FC<Props> = ({ navigation: { goBack } }) => (
  <SafeArea>
    <ContractDetailsScreen
      onBack={goBack}
      onAccept={console.log}
    />
  </SafeArea>
);

export default ContractDetailsController;
