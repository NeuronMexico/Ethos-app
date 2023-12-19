import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeArea } from 'components';
import { AuthStackParams } from 'utils';
import ContractDetailsScreen from './ContractDetailsScreen';

interface Props extends NativeStackScreenProps<AuthStackParams, 'ContractDetails'> {}

const ContractDetailsController: React.FC<Props> = ({ navigation: { goBack, navigate } }) => (
  <SafeArea>
    <ContractDetailsScreen
      onBack={goBack}
      onAccept={() => navigate('CreateAlias', {
        label: 'Alias',
        value: 'Mario Bárcenas',
        type: 'alias',
      })}
    />
  </SafeArea>
);

export default ContractDetailsController;
