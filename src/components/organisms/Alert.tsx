import React, { ReactElement } from 'react';
import { ColorValue, ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, FadeInImage, Modal, Text,
} from 'components/atoms';
import Theme from 'theme';
import { Button } from 'components/molecules/Button';
import i18n from 'i18n';
import { formatDate } from 'utils';
import { CheckMarkCircleIcon, ExportIcon, RejectMarkCircleIcon } from 'assets/svg';
import { OptionButton } from 'components/molecules';
import { ETHOS_CREDIT_LOGO } from 'assets/images';

export type AlertActionType = 'primary' | 'secondary' | 'destructive-primary' | 'destructive-secondary';

export type AlertAction = {
  label: string;
  onPress: () => void;
  type: AlertActionType;
};

export interface AlertDataInterface {
  title: string;
  actions?: Array<AlertAction>;
  message?: string;
  authorization?: string;
  trackingKey?: string;
  reference?: string;
  invoice?: string;
  date?: Date;
  checkmark?: boolean;
  rejectMarck?: boolean;
  shareOption?: boolean;
  extraInfo?: ReactElement;
  customBackgroundColor?: ColorValue;
  fullscreen?: boolean;
  logo?: boolean;
}

interface Props {
  visible: boolean;
  data: AlertDataInterface;
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({
  visible,
  onDismiss,
  data: {
    title,
    actions = [{
      label: i18n.t('global:accept'),
      onPress: () => onDismiss?.(),
      type: 'primary',
    }],
    message,
    authorization,
    trackingKey,
    reference,
    invoice,
    date,
    checkmark,
    rejectMarck,
    shareOption,
    extraInfo,
    fullscreen,
    logo,
    customBackgroundColor = fullscreen ? Theme.Colors.PlaceboBlue : undefined,
  },
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      visible={visible}
      blur={false}
      onDismiss={onDismiss}
      animationType={fullscreen ? 'slide' : 'fade'}
      customBackgroundColor={customBackgroundColor}
    >
      <Container flex middle style={{ paddingHorizontal: 16 }}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {!!logo && (<FadeInImage source={ETHOS_CREDIT_LOGO} width={84} height={13.5} style={styles.ethosCreditLogo} />)}
          <Text text={title} typography="title" textAlign="center" marginBottom={8} />
          {!!reference && (
            <Text>
              <Text text={t('alert:reference')} typography="caption" fontWeight="Regular" />
              {' '}
              <Text text={reference} typography="caption" fontWeight="Bold" />
            </Text>
          )}
          {!!invoice && (
            <Text marginBottom={10}>
              <Text text={t('alert:invoice')} typography="caption" fontWeight="Regular" />
              {' '}
              <Text text={invoice} typography="caption" fontWeight="Bold" />
            </Text>
          )}
          {(checkmark || rejectMarck) && (
          <Container style={{ marginBottom: 8 }}>
            {checkmark ? <CheckMarkCircleIcon /> : <RejectMarkCircleIcon />}
          </Container>
          )}
          {date && <Text text={formatDate(date)} transform="capitalize" typography="subtitle" marginBottom={10} />}
          {extraInfo && (
          <Container style={{ marginTop: 2, marginBottom: 8 }}>
            {extraInfo}
          </Container>
          )}
          {!!message && (
          <Text
            text={message}
            marginTop={2}
            marginBottom={8}
            typography="header"
            textAlign="center"
            fontWeight="Medium"
          />
          )}
          {!!authorization && (
            <Text>
              <Text text={t('alert:authorization')} typography="caption" fontWeight="Regular" />
              {' '}
              <Text text={authorization} typography="caption" fontWeight="Bold" />
            </Text>
          )}
          {!!trackingKey && (
            <Text>
              <Text text={t('alert:trackingKey')} typography="caption" fontWeight="Regular" />
              {' '}
              <Text text={trackingKey} typography="caption" fontWeight="Bold" />
            </Text>
          )}
          {actions.map(({ label, onPress, type }, index) => {
            let backgroundColor = Theme.Colors.DarkSoul;
            let textColor = Theme.Colors.White;

            switch (type) {
              case 'secondary':
                backgroundColor = Theme.Colors.WhiteSmoke;
                textColor = Theme.Colors.DarkSoul;
                break;
              case 'destructive-primary':
                backgroundColor = Theme.Colors.HotCoral;
                textColor = Theme.Colors.White;
                break;
              case 'destructive-secondary':
                backgroundColor = Theme.Colors.WhiteSmoke;
                textColor = Theme.Colors.HotCoral;
                break;
              default:
                break;
            }

            return (
              <Button
                key={index}
                label={label}
                onPress={onPress}
                backgroundColor={backgroundColor}
                textColor={textColor}
                marginVertical={8}
              />
            );
          })}
          {shareOption && (
          <OptionButton
            onPress={() => {}}
            width={40}
            height={40}
            borderRadius={15}
            backgroundColor={Theme.Colors.PlaceboBlue}
            label={t('global:share')}
            marginTop={16}
            marginBottom={8}
            icon={<ExportIcon />}
          />
          )}
        </ScrollView>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Theme.Colors.White,
    borderRadius: 16,
    width: '100%',
    maxHeight: '87%',
    flexGrow: 0,
    overflow: 'hidden',
  },
  contentContainer: {
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  ethosCreditLogo: {
    marginTop: 16,
    marginBottom: 16,
  },
});

export { Alert };
