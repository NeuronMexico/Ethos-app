import { GearIcon } from 'assets/svg';
import { Container, Header, MultipleTextButton } from 'components';
import { CustomText } from 'components/atoms/CustomText';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';

interface Props {
  onPressSettings?: () => void;
  onPressNotification?: (date: any, notification: any) => void;
}

const NotificationsScreen: React.FC<Props> = ({
  onPressSettings,
  onPressNotification,
}: Props) => {
  const { t } = useTranslation();
  const mockData = [
    {
      date: 'Agosto 13, 2023',
      notifications: [
        {
          type: 'paymentRequest',
          title: 'Nueva solicitud de pago',
          amount: '$2,500.00',
          cardLastDigits: '***533',
          bank: 'Santander',
          status: 'Autorizado',
          name: 'Ayush Lagun',
          concept: 'Pago Viaje',
        },
        {
          type: 'paymentDetail',
          title: '¡Sube tu ticket de compra de Restaurante Trashumante!',
          cardLastDigits: '**234',
          status: 'Autorizado',
          amount: '$3,000.00',
          nameDetail: 'Trashumante',
        },
        {
          type: 'paymentRequest',
          title: 'Restaurante Trashumante',
          amount: '$2,500.00',
          cardLastDigits: '***533',
          bank: 'Santander',
          status: 'Autorizado',
          name: 'Ayush Lagun',
          concept: 'Pago Viaje',
        },
      ],
    },
    {
      date: 'Agosto 12, 2023',
      notifications: [
        {
          type: 'paymentDetail',
          title: '¡Gracias por su pago a la tarjeta ** 334 por $20,000.00!',
          status: 'Autorizado',
          amount: '$2,500.00',
          nameDetail: 'Trashumante',
          cardLastDigits: '***533',
          bank: 'Santander',
          name: 'Ayush Lagun',
          concept: 'Pago Viaje',
        },
        {
          type: 'paymentDetail',
          title: '¡Aprovecha el 2x1 en Crepizza que ethos crédito tiene para ti! Aplican T&C',
          cardLastDigits: '**012',
          status: 'Autorizado',
          amount: '$2,500.00',
          nameDetail: 'Trashumante',
        },
      ],
    },
  ];

  return (
    <Container>
      <Header
        title={t('notifications:titlePage')}
        rightAction={onPressSettings}
        rightIcon={<GearIcon />}
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 16 }}>
        {mockData.map((date, index) => (
          <React.Fragment key={index}>
            <CustomText
              text={date.date}
              textColor={Theme.Colors.GreatFalls}
              fontWeight="Medium"
              marginTop={16}
              marginBottom={16}
            />
            {date.notifications.map((notification, nIndex) => (
              <MultipleTextButton
                key={nIndex}
                onPress={() => onPressNotification(date, notification)}
                title={notification.title || ''}
                rightText={notification.type === 'paymentRequest' ? notification.amount : ''}
                borderColor={Theme.Colors.PlaceboBlue}
                borderRadius={24}
                labelColor={Theme.Colors.DarkSoul}
                rightTextColor={Theme.Colors.DarkSoul}
                marginBottom={16}
                alignContent="space-between"
              />
            ))}
          </React.Fragment>
        ))}
      </Container>
    </Container>
  );
};

export default NotificationsScreen;
