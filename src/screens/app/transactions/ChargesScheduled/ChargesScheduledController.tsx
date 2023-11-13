import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Alert, AlertDataInterface, Container, SafeArea,
} from 'components';
import { useAlert } from 'context';
import Theme from 'theme';
import ChargesScheduledScreen from './ChargesScheduledScreen';
import Component from './Component';
import ComponentDelete from './ComponentDelete';
import ComponentConfirmDelete from './ComponentConfirmDelete';

const ChargesScheduledController: React.FC = () => {
  const { t } = useTranslation();
  const alert = useAlert();

  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<AlertDataInterface>();

  const handleDelete = () => {
    alert.show({
      reference: '58432',
      invoice: '12345',
      date: new Date(),
      title: t('charges:chargeScheduledDeletedSuccessfully'),
      checkmark: true,
      extraInfo: (
        <ComponentConfirmDelete />
      ),
      actions: [{
        label: t('global:accept'),
        type: 'primary',
        onPress: alert.hide,
      }],
    });
  };

  const onDelete = () => {
    setVisible(false);
    alert.show({
      title: t('charges:chargeScheduledDeleteQuestion'),
      actions: [
        {
          label: t('global:delete'),
          type: 'destructive-primary',
          onPress: () => {
            handleDelete();
          },
        },
        {
          label: t('global:cancel'),
          type: 'secondary',
          onPress: () => alert.hide(),
        },
      ],
      extraInfo: (
        <ComponentDelete />
      ),
    });
  };

  const onPressCharge = () => {
    setData({
      customBackgroundColor: Theme.Colors.PlaceboBlue,
      reference: '534332',
      invoice: '12345',
      date: new Date(),
      title: t('charges:successCharge'),
      extraInfo: (
        <Component
          onDismiss={() => setVisible(false)}
          onDelete={onDelete}
        />
      ),
    });
    setVisible(true);
  };

  return (
    <SafeArea>
      <ChargesScheduledScreen onPressCharge={onPressCharge} />
      {
        visible && (
          <Container style={{ position: 'absolute', backgroundColor: Theme.Colors.PlaceboBlue }}>
            <Alert visible={visible} data={data!} onDismiss={() => setVisible(false)} />
          </Container>
        )
      }
    </SafeArea>
  );
};

export default ChargesScheduledController;
