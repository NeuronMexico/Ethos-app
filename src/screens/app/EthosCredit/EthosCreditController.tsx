import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  Container,
  ContentModalResponse,
  SafeArea, SwipeableSwitch, Text, Tutorial,
} from 'components';
import { useAlert, useBottomSheet } from 'context';
import EthosCreditScreen from './EthosCreditScreen';

const EthosCreditController: React.FC = () => {
  const { t } = useTranslation();

  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const bottomSheet = useBottomSheet();

  const [cardOn, setCardOn] = React.useState<boolean>(false);
  const [showTutorial, setShowTutorial] = useState<boolean>(true);
  const alert = useAlert();

  const content = (
    <Container>
      <Text text={`${t('cards:card')} *334`} textAlign="left" typography="title" marginVertical={8} />
      <SwipeableSwitch
        config={{ label: { active: t('cards:turnOffCard'), inactive: t('cards:turnOnCard') } }}
        defaultValue={cardOn}
        onChange={setCardOn}
      />
    </Container>
  );

  const onPressShortcut = (id: string) => {
    if (id === 'turnOffCard') {
      bottomSheet.show(content);
    } else if (id === 'contacts') {
      navigate('ContactsGlobalStack');
    }
  };

  const handleTutorialModal = () => {
    setShowTutorial(false);
    paymentRequest();
    // dispatch(setTutorialViewed(true));
  };

  const paymentRequest = useCallback(() => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={2500}
          pickerCard
          references={[
            { label: 'Disposición de línea de crédito', value: '$50' },
            { label: 'Costo por Transferencia', value: '$7.50' },
          ]}
        />
      ),
      title: 'Catherine Daran te envió una solicitud de cobro',
      actions: [
        { label: 'Pagar', onPress: alert.hide, type: 'primary' },
        { label: 'Pendiente', onPress: alert.hide, type: 'secondary' },
        { label: t('global:decline'), onPress: alert.hide, type: 'destructive-secondary' },
      ],
    });
  }, [alert, t]);

  return (
    <SafeArea>
      <EthosCreditScreen
        onPressShortcuts={() => navigate('HomeGlobalStack', { screen: 'Shortcuts' })}
        onPressShortcut={onPressShortcut}
        onPressProfile={() => navigate('ProfileStack', { screen: 'Profile' })}
        onPressNotifications={() => navigate('NotificationStack', { screen: 'Notifications' })}
        onPressAssistant={() => navigate('VirtualAssistant')}
      />
      <Tutorial
        visible={showTutorial}
        onDismiss={handleTutorialModal}
      />
    </SafeArea>
  );
};

export default EthosCreditController;
