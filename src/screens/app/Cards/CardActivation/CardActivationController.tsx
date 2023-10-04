import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useAlert } from 'context';
import CardActivationScreen from './CardActivationScreen';

const CardActivationController: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const alert = useAlert();

  const onSubmit = useCallback(() => {
    alert.show({
      title: t('cards:cardActivatedSuccessfully'),
      invoice: '58432',
      date: new Date(),
      checkmark: true,
      actions: [{
        label: t('global:goBack'),
        onPress: alert.hide,
        type: 'secondary',
      }],
    });
  }, [alert, t]);

  return (
    <SafeArea>
      <CardActivationScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default CardActivationController;
