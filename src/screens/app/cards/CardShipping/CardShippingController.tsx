import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useAlert } from 'context';
import { CardsGlobalStackParams } from 'utils';
import CardShippingScreen from './CardShippingScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'CardShipping'> {}

const CardShippingController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const alert = useAlert();

  const onSubmit = useCallback(() => {
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

  return (
    <SafeArea>
      <CardShippingScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default CardShippingController;
