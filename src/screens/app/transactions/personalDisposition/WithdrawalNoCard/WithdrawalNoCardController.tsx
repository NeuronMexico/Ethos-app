import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeArea } from 'components';
import { ComponentTypes } from 'screens/app/Payment/PaymentsForms';
import ChargesCashScreen from './WithdrawalNoCardScreen';

const WithdrawalNoCardController: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const onPressCash = () => {
    navigate('PaymentStack', {
      screen: 'form',
      params: {
        title: [t('transactions:generateCode')],
        formComponent: ComponentTypes.none,
        initialPage: 1,
      },
    });
  };

  return (
    <SafeArea>
      <ChargesCashScreen
        onPressCash={onPressCash}
        onPressEstablishments={() => navigate('CardsGlobalStack', { screen: 'Establishments' })}
      />
    </SafeArea>
  );
};

export default WithdrawalNoCardController;
