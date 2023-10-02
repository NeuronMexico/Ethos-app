import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, Modal, Text,
} from 'components/atoms';
import Theme from 'theme';
import { Button } from 'components/molecules/Button';
import i18n from 'i18n';
import { formatDate } from 'utils';
import { CheckMarkCircleIcon } from 'assets/svg';

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
  reference?: string;
  invoice?: string;
  date?: Date;
  checkmark?: boolean;
  extraInfo?: ReactElement;
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
    reference,
    invoice,
    date,
    checkmark,
    extraInfo,
  },
}) => {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} blur={false} onDismiss={() => console.log('dismiss')} animationType="fade">
      <Container flex middle style={{ paddingHorizontal: 16 }}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
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
          {date && <Text text={formatDate(date)} transform="capitalize" typography="subtitle" marginBottom={10} />}
          <Text text={title} typography="title" textAlign="center" marginBottom={8} />
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
          {checkmark && <Container style={{ marginBottom: 8 }}><CheckMarkCircleIcon /></Container>}
          {extraInfo && (
          <Container style={{ marginTop: 2, marginBottom: 8 }}>
            {extraInfo}
          </Container>
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
    maxHeight: '80%',
    flexGrow: 0,
    overflow: 'hidden',
  },
  contentContainer: {
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});

export { Alert };
