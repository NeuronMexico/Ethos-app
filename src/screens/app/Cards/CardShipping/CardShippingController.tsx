import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useAlert } from 'context';
import CardShippingScreen from './CardShippingScreen';

const CardShippingController: React.FC = () => {
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
    });
  }, [alert, t]);

  return (
    <SafeArea>
      <CardShippingScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default CardShippingController;
