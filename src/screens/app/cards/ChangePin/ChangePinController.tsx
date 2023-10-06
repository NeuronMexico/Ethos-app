import React, { useCallback } from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useAlert } from 'context';
import { CardsGlobalStackParams } from 'utils';
import ChangePinScreen from './ChangePinScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'ChangePin'> {}

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const ChangePinController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const alert = useAlert();

  const onSubmit = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      alert.show({
        title: t('cards:pinChangedSuccessfully'),
        invoice: '58432',
        date: new Date(),
        checkmark: true,
        actions: [{
          label: t('global:goBack'),
          onPress: () => {
            alert.hide();
            navigation.goBack();
          },
          type: 'secondary',
        }],
      });
    }
  }, [alert, t]);

  return (
    <SafeArea>
      <ChangePinScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default ChangePinController;
