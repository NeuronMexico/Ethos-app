import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SafeArea } from 'components';
import { data } from 'screens/app/contacts/List/ListController';
import { ComponentTypes } from 'screens/app/Payment/PaymentsForms';
import { ChargesGlobalStackParams } from 'utils';
import ChargesContactsScreen from './ChargesContactsScreen';

const ChargesContactsController = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const {
    params: {
      from,
    },
  } = useRoute<RouteProp<ChargesGlobalStackParams, 'ChargesContacts'>>();

  const onPressContact = (id: number) => navigate('PaymentStack', {
    screen: 'form',
    params: {
      title: [t(`charges:${from === 'pay' ? 'payTo' : 'chargeTo'}`, { to: data.find((e) => e.id === id)?.name })],
      formComponent: from === 'collect' ? ComponentTypes.PaymentCollectToContact : ComponentTypes.PaymentPayToContact,
      ...from === 'pay' && {
        destinationAccount: {
          name: data.find((e) => e.id === id)?.name,
          account: '2844 2388 4332 634531',
          bank: 'CLABE Santander',
        },
      },
    },
  });

  const onPressNewContact = () => navigate('PaymentStack', {
    screen: 'form',
    params: {
      title: t('contacts:beneficiaryData'),
      formComponent: ComponentTypes.PaymentPayToNewContact,
    },
  });

  const onPressFastCollect = () => navigate('PaymentStack', {
    screen: 'form',
    params: {
      title: t('charges:fastCollect'),
      formComponent: ComponentTypes.PaymentFastCollect,
    },
  });

  return (
    <SafeArea>
      <ChargesContactsScreen
        title={
          from === 'pay'
            ? t('transactions:payToContacts')
            : t('charges:chargeWithContacts')
        }
        onPressNewContact={onPressNewContact}
        onPressContact={onPressContact}
        enableNewContact={from === 'pay'}
        onPressFastCollect={onPressFastCollect}
      />
    </SafeArea>
  );
};

export default ChargesContactsController;
