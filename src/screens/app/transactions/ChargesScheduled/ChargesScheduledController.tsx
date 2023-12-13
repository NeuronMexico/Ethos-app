import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  QRModal, SafeArea,
} from 'components';
import { useAlert, useBottomSheet } from 'context';
import { formatQuantity } from 'utils';
import { ComponentTypes } from 'screens/app/Payment/PaymentsForms';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ChargesScheduledScreen from './ChargesScheduledScreen';
import ComponentDelete from './ComponentDelete';
import ComponentConfirmDelete from './ComponentConfirmDelete';
import { ChargeBottomSheetContent } from './components';

const ChargesScheduledController: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const bottomSheet = useBottomSheet();
  const alert = useAlert();

  const [visible, setVisible] = useState<boolean>(false);

  const handleDelete = useCallback(() => {
    alert.show({
      reference: '58432',
      invoice: '12345',
      date: new Date(),
      title: t('charges:chargeScheduledDeletedSuccessfully'),
      checkmark: true,
      extraInfo: (
        <ComponentConfirmDelete />
      ),
      actions: [{
        label: t('global:accept'),
        type: 'primary',
        onPress: alert.hide,
      }],
    });
  }, [alert, t]);

  const onDelete = useCallback(() => {
    setVisible(false);
    alert.show({
      title: t('charges:chargeScheduledDeleteQuestion'),
      actions: [
        {
          label: t('global:delete'),
          type: 'destructive-primary',
          onPress: () => {
            handleDelete();
          },
        },
        {
          label: t('global:cancel'),
          type: 'secondary',
          onPress: () => alert.hide(),
        },
      ],
      extraInfo: (
        <ComponentDelete />
      ),
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
        }}
      />);
    } else if (type === 'qr') {
      setVisible(true);
    }
  }, [bottomSheet, navigate]);

  return (
    <SafeArea>
      <ChargesScheduledScreen onPressCharge={onPressCharge} />
      <QRModal
        visible={visible}
        title="Código QR"
        message={t('transactions:goToAffiliatedStore')}
        amount={`${formatQuantity(2500)} MXN`}
        flow="code-payment"
        onPressCheckEstablishment={() => {
          setVisible(false);
          console.log('establishment');
        }}
        onPressBack={() => setVisible(false)}
      />
    </SafeArea>
  );
};

export default ChargesScheduledController;
