import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Button, Container, SafeArea, Text,
} from 'components';
import { QRModal } from 'screens/app/Payment/components';
import { useAlert } from 'context';
import { useTranslation } from 'react-i18next';
import { formatQuantity } from 'utils';
import { VisaIcon } from 'assets/svg';
import Theme from 'theme';
import ReactNativeBiometrics from 'react-native-biometrics';
import CashPaymentScreen from './CashPaymentScreen';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const CashPaymentController: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const alert = useAlert();
  const { t } = useTranslation();
  const [showQRModal, setShowQRModal] = useState<boolean>(false);

  const biometricManager = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      setShowQRModal(true);
    }
  }, [t]);

  const generateCode = () => {
    alert.show({
      extraInfo: (
        <>
          <Text
            text={formatQuantity(Number('00'))}
            textAlign="center"
            fontWeight="Bold"
            typography="header"
            fontSize={34}
            marginBottom={16}
          />
          <Text text="Tarjeta de donde saldrá el dinero:" textAlign="center" />
          <Button
            label="**** **** **** 531"
            onPress={() => {}}
            backgroundColor={Theme.Colors.PlaceboBlue}
            icon={<VisaIcon />}
            colorless
            paddingVertical={10}
            paddingHorizontal={80}
            marginTop={27}
            marginBottom={16}
          />
          <Container
            style={{
              width: 'auto',
              height: 0,
              borderBottomWidth: 1,
              borderBottomColor: Theme.Colors.PlaceboBlue,
            }}
          />
        </>
      ),
      title: t('transactions:confirmWithdrawalWithoutCard'),
      actions: [
        {
          label: t('global:confirm'),
          type: 'secondary',
          onPress: () => {
            alert.hide();
            biometricManager();
          },
        },
        {
          label: t('global:cancel'),
          type: 'primary',
          onPress: () => {
            alert.hide();
          },
        },
      ],
    });
  };
  return (
    <SafeArea>
      <CashPaymentScreen
        onSubmit={generateCode}
        onPressEstablishments={() => navigate('Establishments')}
      />
      <QRModal
        visible={showQRModal}
        title={t('transactions:payToQR')}
        message={t('transactions:goToAffiliatedStore')}
        amount={`${formatQuantity(500)} MXN`}
        flow="code-payment"
        onPressCheckEstablishment={() => {
          setShowQRModal(false);
          navigate('Establishments');
        }}
        onPressBack={() => setShowQRModal(false)}
      />
    </SafeArea>
  );
};

export default CashPaymentController;
