import { SafeArea } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from 'context';
import ReactNativeBiometrics from 'react-native-biometrics';
import { AuthStackParams } from 'utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ForgotPasswordScreen from './ForgotPasswordScreen';

interface Props extends NativeStackScreenProps<AuthStackParams, 'ForgotPassword'> {}

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const ForgotPasswordController: React.FC<Props> = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const alert = useAlert();

  const onSubmit = async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      alert.show({
        title: 'Contraseña cambiada correctamente',
        invoice: '58432',
        date: new Date(),
        checkmark: true,
        actions: [{
          label: t('global:accept'),
          onPress: () => {
            alert.hide();
            navigation.goBack();
          },
          type: 'primary',
        }],
      });
    }
  };

  return (
    <SafeArea>
      <ForgotPasswordScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default ForgotPasswordController;
