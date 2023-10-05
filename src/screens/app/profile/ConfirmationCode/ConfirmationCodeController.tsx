import React from 'react';
import { SafeArea } from 'components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAlert } from 'context';
import { useTranslation } from 'react-i18next';
import { ConfirmationCodeScreen } from './ConfirmationCodeScreen';

interface RouteParams {
  type: string;
  value: string;
}

const ConfirmationCodeController: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<RouteProp<Record<string, RouteParams>>>();
  const { type, value } = route.params;
  const alert = useAlert();

  const onSubmit = () => {
    alert.show({
      title: t(`profile:${type}ResponseTitle`),
      invoice: '12345',
      date: new Date(),
      checkmark: true,
      actions: [
        {
          label: t('global:accept'),
          onPress: () => {
            alert.hide();
            navigate('Profile');
          },
          type: 'primary',
        },
      ],
    });
  };

  return (
    <SafeArea>
      <ConfirmationCodeScreen onSubmit={onSubmit} type={type} value={value} />
    </SafeArea>
  );
};

export default ConfirmationCodeController;
