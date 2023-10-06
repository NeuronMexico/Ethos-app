import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useAlert } from 'context';
import { CardsGlobalStackParams } from 'utils';
import CardActivationScreen from './CardActivationScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'CardActivation'> {}

const CardActivationController: React.FC<Props> = ({ navigation }) => {
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
        onPress: () => {
          alert.hide();
          navigation.goBack();
        },
        type: 'secondary',
      }],
    });
  }, [alert, navigation, t]);

  return (
    <SafeArea>
      <CardActivationScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default CardActivationController;
