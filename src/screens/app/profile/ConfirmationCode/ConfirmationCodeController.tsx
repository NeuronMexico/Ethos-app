import React from 'react';
import { SafeArea } from 'components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ConfirmationCodeScreen } from './ConfirmationCodeScreen';

interface RouteParams {
  type: string;
  value: string;
}

const ConfirmationCodeController: React.FC = () => {
  const { goBack } = useNavigation();
  const route = useRoute<RouteProp<Record<string, RouteParams>>>();
  const { type, value } = route.params;
  return (
    <SafeArea>
      <ConfirmationCodeScreen onSubmit={() => { goBack(); }} type={type} value={value} />
    </SafeArea>
  );
};

export default ConfirmationCodeController;
