import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ReactNativeBiometrics from 'react-native-biometrics';

import {
  ContentModalResponse,
  QRModal, SafeArea,
} from 'components';
import { useAlert, useBottomSheet } from 'context';
import { formatQuantity } from 'utils';
import { ComponentTypes } from 'screens/app/Payment/PaymentsForms';
import ChargesScheduledScreen from './ChargesScheduledScreen';
import { ChargeBottomSheetContent } from './components';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const ChargesScheduledController: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const bottomSheet = useBottomSheet();
  const alert = useAlert();

  const [visible, setVisible] = useState<boolean>(false);

  const handleDelete = useCallback(() => {
    alert.show({
      extraInfoContainerWidth: '100%',
      extraInfo: (
        <ContentModalResponse
          amount={2500}
          cardButton
        />
      ),
      title: t('form:deletedQRCobro'),
      fullscreen: true,
      checkmark: true,
      logo: true,
      invoice: '437437',
      date: new Date(),
      actions: [
        {
          label: t('form:goToTransactions'),
          onPress: () => {
            alert.hide();
            navigate('TransactionsStack');
          },
          type: 'secondary',
        },
        { label: t('global:share'), onPress: alert.hide, type: 'primary' },
      ],
    });
  }, [alert, navigate, t]);

  const onDelete = useCallback(() => {
    alert.show({
      title: t('form:confirmQrPayment'),
      checkmark: false,
      extraInfo: (<ContentModalResponse
        amount={Number('2500')}
        cardButton
      />),
      extraInfoContainerWidth: '100%',
      actions: [
        {
          label: t('global:confirm'),
          type: 'primary',
          onPress: async () => {
            alert.hide();
            const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
            if (result.success) {
              alert.hide();
              handleDelete();
            }
          },
        },
        {
          label: t('global:cancel'),
          type: 'secondary',
          onPress: () => {
            alert.hide();
          },
        },
      ],
    });
  }, [alert, handleDelete, t]);

  const onPressCharge = useCallback((type: string) => {
    if (type === 'charge') {
      bottomSheet.show(<ChargeBottomSheetContent
        onPressEdit={() => {
          bottomSheet.hide();
          navigate('PaymentStack', {
            screen: 'form',
            params: {
              title: 'Editar cobro',
              formComponent: ComponentTypes.PaymentCollectScheduled,
            },
          });
        }}
        onPressDelete={() => {
          bottomSheet.hide();
          onDelete();
        }}
      />);
    } else if (type === 'qr') {
      setVisible(true);
    }
  }, [bottomSheet, navigate, onDelete]);

  return (
    <SafeArea>
      <ChargesScheduledScreen onPressCharge={onPressCharge} />
      <QRModal
        visible={visible}
        title="Código QR"
        invoice="437437"
        amount={`${formatQuantity(2500)} MXN`}
        validity={t('cards:hours', { hours: 24 })}
        date={new Date()}
        cardNumber="**** **** **** 4531"
        cardLabel={t('form:receiveMoneyCard')}
        buttonsCaption={t('form:shareQRCode')}
        actions={[
          {
            label: t('form:goToTransactions'),
            type: 'secondary',
            onPress: () => {
              setVisible(false);
              navigate('TransactionsStack');
            },
          },
          {
            label: t('global:delete'),
            type: 'destructive-secondary',
            onPress: () => {
              setVisible(false);
              onDelete();
            },
          },
        ]}
      />
    </SafeArea>
  );
};

export default ChargesScheduledController;
