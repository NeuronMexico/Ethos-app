import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeArea } from 'components';
import ChargesCashScreen from './ChargesCashScreen';

const ChargesCashController: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeArea>
      <ChargesCashScreen
        onPressCash={() => navigate('PaymentStack', { screen: 'form', params: { title: t('charges:chargeWithCash') } })}
        onPressEstablishments={() => navigate('CardsGlobalStack', { screen: 'Establishments' })}
      />
    </SafeArea>
  );
};

export default ChargesCashController;
