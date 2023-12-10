import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useAlert } from 'context';
import { CardsGlobalStackParams, formatQuantity, sleep } from 'utils';
import CardShippingScreen from './CardShippingScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'CardShipping'> {}

const CardShippingController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const alert = useAlert();

  const showSuccessAlert = useCallback(async () => {
    await sleep(100);
    alert.show({
      title: t('cards:cardInTransit'),
      message: t('cards:checkShippingStatus'),
      invoice: '58432',
      date: new Date(),
      checkmark: true,
      actions: [{
        label: t('global:accept'),
        type: 'primary',
        onPress: () => {
          alert.hide();
          navigation.navigate('Card');
        },
      }],
    });
  }, [alert, navigation, t]);

  const showConfirmationAlert = useCallback(async () => {
    await sleep(100);
    alert.show({
      title: t('cards:confirmDeliveryAddress'),
      message: 'Sebastián el Cano, 100, San Luis Potosí, San Luis Potosí 78200',
      divider: true,
      actions: [
        {
          label: t('global:continue'),
          type: 'primary',
          onPress: () => {
            alert.hide();
            showSuccessAlert();
          },
        },
        {
          label: t('global:goBack'),
          type: 'secondary',
          onPress: () => {
            alert.hide();
          },
        },
      ],
    });
  }, [alert, showSuccessAlert, t]);

  const onSubmit = useCallback(() => {
    alert.show({
      title: t('cards:distantZone'),
      message: t('cards:additionalCost', { amount: formatQuantity(200) }),
      divider: true,
      actions: [
        {
          label: t('global:accept'),
          type: 'primary',
          onPress: () => {
            alert.hide();
            showConfirmationAlert();
          },
        },
        {
          label: t('cards:editAddress'),
          type: 'secondary',
          onPress: () => {
            alert.hide();
          },
        },
      ],
    });
  }, [alert, showConfirmationAlert, t]);

  return (
    <SafeArea>
      <CardShippingScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default CardShippingController;
