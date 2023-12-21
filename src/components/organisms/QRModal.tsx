import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  AlertAction,
  Button,
  Container,
  FadeInImage,
  Modal,
  QRCode,
  Text,
} from 'components';
import Theme from 'theme';
import { formatDate } from 'utils';
import { VisaIcon } from 'assets/svg';
import { ETHOS_CREDIT_LOGO } from 'assets/images';

interface Props {
  visible: boolean;
  title: string;
  message?: string;
  amount: string;
  invoice?: string;
  date?: Date;
  logo?: boolean;
  code?: string;
  validity: string;
  cardNumber?: string;
  cardLabel?: string;
  actions?: Array<AlertAction>;
  buttonsCaption?: string;
}

const QRModal: React.FC<Props> = ({
  visible,
  title,
  message,
  amount,
  invoice,
  date,
  logo,
  code,
  validity,
  cardNumber,
  cardLabel,
  actions = [],
  buttonsCaption,
}) => {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} blur={false} animationType="slide" customBackgroundColor={Theme.Colors.PlaceboBlue}>
      <Container flex middle style={{ paddingHorizontal: 16 }}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {!!logo && (<FadeInImage source={ETHOS_CREDIT_LOGO} width={84} height={13.5} />)}
          <Text text={title} typography="title" textAlign="center" marginVertical={16} />
          {!!invoice && (
          <Text>
            <Text text={t('alert:invoice')} typography="subtitle" fontWeight="Medium" />
            {' '}
            <Text text="43743" typography="subtitle" fontWeight="Bold" />
          </Text>
          )}
          {date && <Text text={formatDate(date)} transform="capitalize" typography="subtitle" />}
          {!!message && (
          <Text
            text={message}
            typography="header"
            marginTop={!invoice && !date ? 0 : 16}
            textAlign="center"
            fontWeight="Regular"
          />
          )}
          {!!code && (
          <>
            <Text
              text={t('cards:visitAnAffiliatedEstablishment')}
              typography="subtitle"
              textAlign="center"
              marginVertical={16}
            />
            <Text text="328572" fontSize={34} fontWeight="Bold" />
          </>
          )}
          <Container style={{ marginTop: 16 }}><QRCode value="Ethos QR" /></Container>
          <Text
            text={amount}
            typography="header"
            fontWeight="Bold"
            fontSize={34}
            marginVertical={16}
          />
          <Text>
            <Text text={t('cards:codeValidFor')} typography="subtitle" fontWeight="Medium" />
            {' '}
            <Text text={validity} typography="subtitle" fontWeight="Bold" />
          </Text>
          <Container flex alignment="end" center width="100%">
            {!!cardNumber && !!cardLabel && (
            <Text
              text={cardLabel}
              typography="caption"
              marginTop={16}
            />
            )}
            {!!cardNumber && (
            <Button
              label={cardNumber}
              onPress={() => {}}
              backgroundColor={Theme.Colors.PlaceboBlue}
              icon={<VisaIcon />}
              colorless
              paddingVertical={10}
              marginTop={16}
              width="95%"
              disabled
              disabledUI={false}
            />
            )}
            <Container
              style={{
                width: '90%',
                height: 0,
                borderBottomWidth: 1,
                borderBottomColor: Theme.Colors.PlaceboBlue,
                marginTop: 16,
              }}
            />
            {buttonsCaption && (
            <Text
              text={buttonsCaption}
              typography="subtitle"
              marginTop={16}
            />
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
                  marginTop={16}
                />
              );
            })}
          </Container>
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
});

export { QRModal };
