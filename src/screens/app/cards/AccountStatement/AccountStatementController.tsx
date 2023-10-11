import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { CardsGlobalStackParams } from 'utils';
import AccountStatementScreen from './AccountStatementScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'AccountStatement'> {}

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const AccountStatementController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSelectStatement = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      navigation.navigate('PDFViewer');
    }
  }, [navigation, t]);

  return (
    <SafeArea>
      <AccountStatementScreen onSelectStatement={onSelectStatement} />
    </SafeArea>
  );
};

export default AccountStatementController;
