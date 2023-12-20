import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container,
  Header,
  Modal,
  QRCode,
  Text,
} from 'components';
import Theme from 'theme';
import { PaymentFlowType, formatDate } from 'utils';
import { ExportIcon, VisaIcon } from 'assets/svg';

interface Props {
  visible: boolean;
  title: string;
  message: string;
  amount: string;
  flow: PaymentFlowType;
  onPressCheckEstablishment: () => void;
  onPressBack: () => void;
}

const QRModal: React.FC<Props> = ({
  visible,
  title,
  message,
  amount,
  flow,
  onPressCheckEstablishment,
  onPressBack,
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
          <Header title={title} showBackButton={false} />
          {flow === 'code-payment' && (
          <Text>
            <Text text={t('alert:invoice')} typography="subtitle" fontWeight="Medium" />
            {' '}
            <Text text="43743" typography="subtitle" fontWeight="Bold" />
          </Text>
          )}
          <Text text={formatDate(new Date())} transform="capitalize" typography="subtitle" />
          <Text
            text={message}
            typography="header"
            marginVertical={16}
            textAlign="center"
            fontWeight="Regular"
          />
          <Text text="328572" fontSize={34} fontWeight="Bold" marginBottom={16} />
          <QRCode value="Ethos QR" />
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
            <Text text={t('cards:hours', { hours: 24 })} typography="subtitle" fontWeight="Bold" />
          </Text>
          <Container flex alignment="end" center width="100%">
            {flow === 'personal-project-payment' && (
            <Button
              label={t('global:accept')}
              onPress={onPressBack}
              marginTop={16}
            />
            )}
            {(flow === 'cash-payment' || flow === 'personal-project-payment') && (
            <Button
              label={t('cards:checkEstablishments')}
              onPress={onPressCheckEstablishment}
              marginTop={16}
              marginBottom={flow === 'personal-project-payment' ? 16 : 0}
              backgroundColor={flow === 'personal-project-payment' ? Theme.Colors.WhiteSmoke : undefined}
              textColor={flow === 'personal-project-payment' ? Theme.Colors.DarkSoul : undefined}
            />
            )}
            {flow !== 'personal-project-payment' && (
            <>
              <Text text={t('form:sendMoneyCard')} typography="subtitle" fontWeight="Medium" />
              <Button
                label="**** **** **** 531"
                onPress={() => {}}
                backgroundColor={Theme.Colors.PlaceboBlue}
                icon={<VisaIcon />}
                colorless
                paddingVertical={10}
                marginTop={27}
                marginBottom={16}
                width="95%"
              />
              <Container
                style={{
                  width: '90%',
                  height: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: Theme.Colors.PlaceboBlue,
                }}
              />
              <Text text={t('form:shareQR')} typography="subtitle" fontWeight="Medium" />
              <Button
                label={t('form:goToTransactions')}
                onPress={onPressBack}
                marginVertical={16}
                backgroundColor={Theme.Colors.WhiteSmoke}
                textColor={Theme.Colors.DarkSoul}
              />
              <Button
                label={t('global:share')}
                onPress={onPressBack}
                icon={<ExportIcon color={Theme.Colors.White} />}
              />
            </>
            )}
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
    // paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  ethosCreditLogo: {
    marginTop: 16,
    marginBottom: 16,
  },
});

export { QRModal };
