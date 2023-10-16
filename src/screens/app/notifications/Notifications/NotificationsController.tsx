import {
  Button,
  Container, OptionButton, SafeArea,
} from 'components';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NotificationStackParams } from 'utils';
import { useBottomSheet } from 'context';
import { useTranslation } from 'react-i18next';
import { CustomText as Text } from 'components/atoms/CustomText';
import Theme from 'theme';
import { FileUploadIcon, ShieldIcon } from 'assets/svg';
import NotificationsScreen from './NotificationsScreen';

const NotificationsController: React.FC = () => {
  const { t } = useTranslation();

  const { navigate } = useNavigation<NativeStackNavigationProp<NotificationStackParams>>();
  const onPressSettings = () => { navigate('NotificationSettings'); };
  const bottomSheet = useBottomSheet();

  const content = (date: any, notification: any) => (
    <Container center style={{ gap: 16 }}>
      <Text
        text={date.date}
        textColor={Theme.Colors.GreatFalls}
        fontWeight="Medium"
        marginTop={16}
      />
      <Text
        text={notification.amount || ''}
        fontWeight="Bold"
        fontSize={34}
      />
      <Text
        text={notification.nameDetail || ''}
        fontWeight="Bold"
        fontSize={17}
      />
      <Container row flex style={{ justifyContent: 'space-between', width: '60%' }}>
        <Container>
          <Text
            text={t('notifications:retirementAccount')}
            fontSize={13}
          />
          <Text
            text={notification.cardLastDigits || ''}
            fontWeight="Bold"
            fontSize={17}
          />
        </Container>
        <Container>
          <Text
            text={t('notifications:state')}
            fontSize={13}
          />
          <Text
            text={notification.status || ''}
            fontWeight="Bold"
            fontSize={17}
          />
        </Container>
      </Container>
      <Button
        label={t('notifications:assignTags')}
        onPress={() => {}}
        marginBottom={10}
        marginRight={11}
        width={172}
        backgroundColor={Theme.Colors.PlaceboBlue}
        textColor={Theme.Colors.DarkSoul}
      />
      <Container row flex style={{ justifyContent: 'space-between' }}>
        <Button
          label={t('notifications:uploadTicket')}
          onPress={() => {}}
          borderColor={Theme.Colors.PlaceboBlue}
          marginBottom={10}
          borderStyle
          icon={<FileUploadIcon />}
          colorless
          marginRight={11}
          width={172}
        />
        <Button
          label={t('notifications:uploadInvoice')}
          onPress={() => {}}
          borderColor={Theme.Colors.PlaceboBlue}
          marginBottom={10}
          borderStyle
          icon={<FileUploadIcon />}
          colorless
          width={172}
        />
      </Container>
      <OptionButton
        label={t('notifications:reportMovement')}
        onPress={() => {}}
        icon={<ShieldIcon />}
      />
    </Container>
  );

  const paymentRequestContent = (notification: any) => (
    <Container flex center style={{ gap: 16 }}>
      <Text
        text={t('notifications:paymentRequestTitle')}
        fontWeight="Bold"
        fontSize={20}
        marginBottom={16}
      />
      <Text
        text={notification.name || ''}
        fontWeight="Bold"
        fontSize={17}
      />
      <Text
        text={t('notifications:concept')}
        fontSize={13}
      />
      <Text
        text={notification.concept || ''}
        fontWeight="Bold"
        fontSize={17}
      />
      <Text
        text={t('notifications:clabe')}
        fontSize={13}
      />
      <Text
        text={notification.cardLastDigits || ''}
        fontWeight="Bold"
        fontSize={17}
      />
      <Text
        text={t('notifications:bank')}
        fontSize={13}
      />
      <Text
        text={notification.bank || ''}
        fontWeight="Bold"
        fontSize={17}
      />
      <Text
        text={t('notifications:amount')}
        fontSize={13}
      />
      <Text
        text={notification.amount || ''}
        fontWeight="Bold"
        fontSize={34}
      />
      <Button label={t('global:pay')} onPress={() => { bottomSheet.hide(); }} />
      <Button
        onPress={() => {}}
        label={t('global:decline')}
        backgroundColor={Theme.Colors.WhiteSmoke}
        textColor={Theme.Colors.DarkSoul}
        width="100%"
      />
    </Container>
  );

  const onPressNotification = (date: any, notification: any) => {
    bottomSheet.show(notification.type === 'paymentRequest'
      ? paymentRequestContent(notification)
      : content(date, notification));
  };
  return (
    <SafeArea>
      <NotificationsScreen onPressSettings={onPressSettings} onPressNotification={onPressNotification} />
    </SafeArea>
  );
};

export default NotificationsController;
