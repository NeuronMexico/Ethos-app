import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  Container,
  SafeArea, SwipeableSwitch, Text,
} from 'components';
import { useBottomSheet } from 'context';
import EthosCreditScreen from './EthosCreditScreen';

const EthosCreditController: React.FC = () => {
  const { t } = useTranslation();

  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const bottomSheet = useBottomSheet();

  const [cardOn, setCardOn] = React.useState<boolean>(false);

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
    }
  };

  return (
    <SafeArea>
      <EthosCreditScreen
        onPressShortcuts={() => navigate('HomeGlobalStack', { screen: 'Shortcuts' })}
        onPressShortcut={onPressShortcut}
        onPressProfile={() => navigate('ProfileStack', { screen: 'Profile' })}
        onPressNotifications={() => navigate('NotificationStack', { screen: 'Notifications' })}
      />
    </SafeArea>
  );
};

export default EthosCreditController;
