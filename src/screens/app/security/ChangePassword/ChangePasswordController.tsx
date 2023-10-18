import { SafeArea } from 'components';
import React from 'react';
import { useAlert } from 'context';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import ChangePasswordScreen from './ChangePasswordScreen';

const ChangePasswordController: React.FC = () => {
  const alert = useAlert();
  const { t } = useTranslation();
  const { goBack } = useNavigation();

  const onSubmit = () => {
    alert.show({
      title: t('changePassword:passwordChangedSuccessfully'),
      invoice: '58432',
      date: new Date(),
      checkmark: true,
      actions: [{
        label: t('global:goBack'),
        onPress: () => {
          alert.hide();
          goBack();
        },
        type: 'primary',
      }],
    });
  };
  return (
    <SafeArea>
      <ChangePasswordScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default ChangePasswordController;
