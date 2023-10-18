import { SafeArea } from 'components';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ReactNativeBiometrics from 'react-native-biometrics';
import { ProfileStackParams } from 'utils';
import { useTranslation } from 'react-i18next';
import SecurityScreen from './SecurityScreen';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const SecurityController: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  const onChangePassword = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      navigate('ChangePassword');
    }
  }, [navigate, t]);

  return (
    <SafeArea>
      <SecurityScreen onChangePassword={onChangePassword} />
    </SafeArea>
  );
};
export default SecurityController;
