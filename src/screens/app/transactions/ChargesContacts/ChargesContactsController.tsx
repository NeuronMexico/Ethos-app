import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SafeArea } from 'components';
import { data } from 'screens/app/contacts/List/ListController';
import ChargesContactsScreen from './ChargesContactsScreen';

const ChargesContactsController = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const onPressContact = (id: number) => navigate('PaymentStack', {
    screen: 'form',
    params: {
      title: t('charges:chargeTo', { to: data.find((e) => e.id === id)?.name }),
    },
  });

  return (
    <SafeArea>
      <ChargesContactsScreen onPressContact={onPressContact} />
    </SafeArea>
  );
};

export default ChargesContactsController;
