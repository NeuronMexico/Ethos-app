import { Container, Header, SwitchField } from 'components';
import { CustomText as Text } from 'components/atoms/CustomText';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';

const NotificationSettingsScreen: React.FC = () => {
  const { t } = useTranslation();
  const [pushNotifications, setPushNotifications] = useState<boolean>(true);
  const [SMSNotifications, setSMSNotifications] = useState<boolean>(true);
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
  const [transactionsNotifications, setTransactionsNotifications] = useState<boolean>(true);
  const [promotionsNotifications, setPromotionsNotifications] = useState<boolean>(true);
  const [travelAndExpensesNotifications, setTravelAndExpensesNotifications] = useState<boolean>(true);

  return (
    <Container style={{ marginHorizontal: Theme.Sizes.Padding }}>
      <Header title={t('notifications:titlePage')} />
      <Text
        text={t('notifications:sendNotificationsBy')}
        marginTop={32}
        marginBottom={16}
      />
      <SwitchField
        label={t('notifications:pushNotifications')}
        active={pushNotifications}
        onChange={setPushNotifications}
        borderBottom
      />
      <SwitchField
        label={t('notifications:sms')}
        active={SMSNotifications}
        onChange={setSMSNotifications}
        borderBottom
      />
      <SwitchField
        label={t('notifications:email')}
        active={emailNotifications}
        onChange={setEmailNotifications}
        borderBottom
      />
      <Text
        text={t('notifications:sendNotificationsBy')}
        marginTop={32}
        marginBottom={16}
      />
      <SwitchField
        label={t('notifications:transactions')}
        active={transactionsNotifications}
        onChange={setTransactionsNotifications}
        borderBottom
      />
      <SwitchField
        label={t('notifications:promotions')}
        active={promotionsNotifications}
        onChange={setPromotionsNotifications}
        borderBottom
      />
      <SwitchField
        label={t('notifications:travelAndExpenses')}
        active={travelAndExpensesNotifications}
        onChange={setTravelAndExpensesNotifications}
        borderBottom
      />
    </Container>
  );
};

export default NotificationSettingsScreen;
