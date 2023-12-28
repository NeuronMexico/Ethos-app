import React, { useCallback } from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { SafeArea, Text } from 'components';
import { useAlert } from 'context';
import { CardsGlobalStackParams } from 'utils';
import CardReportScreen from './CardReportScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'CardReport'> {}

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const CardReportController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const alert = useAlert();

  const onPressDisableCard = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      alert.show({
        title: t('cards:physicalCardDisabledSuccessfully'),
        invoice: '58432',
        date: new Date(),
        checkmark: true,
        actions: [
          {
            label: t('cards:requestNow'),
            type: 'primary',
            onPress: () => {
              alert.hide();
              navigation.replace('CardSelection');
            },
          },
          {
            label: t('global:goBack'),
            type: 'secondary',
            onPress: () => {
              alert.hide();
              navigation.goBack();
            },
          },
        ],
      });
    }
  }, [alert, navigation, t]);

  return (
    <SafeArea>
      <CardReportScreen onPressDisableCard={onPressDisableCard} />
    </SafeArea>
  );
};

export default CardReportController;
