import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container,
  Header,
  Modal,
  QRCode,
  SafeArea,
  Text,
} from 'components';
import Theme from 'theme';
import { PaymentFlowType, formatDate, formatQuantity } from 'utils';
import { ExportIcon } from 'assets/svg';

interface Props {
  visible: boolean;
  title: string;
  message: string;
  amount: string;
  transactionCost: number;
  flow: PaymentFlowType;
  onPressCheckEstablishment: () => void;
  onPressBack: () => void;
}

const QRModal: React.FC<Props> = ({
  visible,
  title,
  message,
  amount,
  transactionCost,
  flow,
  onPressCheckEstablishment,
  onPressBack,
}) => {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} animationType="slide">
      <SafeArea>
        <Header title={title} showBackButton={false} />

        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: Theme.Sizes.Padding,
            paddingTop: Theme.Sizes.MarginTop,
            alignItems: 'center',
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {flow === 'code-payment' && (
          <Text marginBottom={16}>
            <Text text={t('alert:invoice')} typography="subtitle" fontWeight="Medium" />
            {' '}
            <Text text="43743" typography="subtitle" fontWeight="Bold" />
          </Text>
          )}
          <Text text={formatDate(new Date())} transform="capitalize" typography="subtitle" />
          <Text marginVertical={16}>
            <Text text={t('cards:codeValidFor')} typography="subtitle" fontWeight="Medium" />
            {' '}
            <Text text={t('cards:hours', { hours: 24 })} typography="subtitle" fontWeight="Bold" />
          </Text>

          <QRCode value="Ethos QR" />

          <Text
            text={message}
            typography="header"
            marginVertical={16}
            textAlign="center"
            fontWeight="Regular"
          />
          <Text text="328572" fontSize={34} fontWeight="Bold" />
          <Text
            text={amount}
            typography="header"
            fontWeight="Bold"
            marginVertical={16}
          />
          <Text>
            <Text text={t('cards:transactionCost')} typography="caption" fontWeight="Medium" />
            {' '}
            <Text text={formatQuantity(transactionCost)} typography="caption" fontWeight="Bold" />
          </Text>

          <Container flex alignment="end" center width="100%">
            {flow === 'cash-payment' && (
            <Button
              label={t('cards:checkEstablishments')}
              onPress={onPressCheckEstablishment}
              marginTop={16}
            />
            )}
            <Button
              label={t('global:goBack')}
              onPress={onPressBack}
              marginVertical={16}
              backgroundColor={Theme.Colors.WhiteSmoke}
              textColor={Theme.Colors.DarkSoul}
            />
            {flow === 'code-payment' && (
            <Button
              label={t('global:share')}
              onPress={() => {}}
              width={40}
              height={40}
              borderRadius={14}
              backgroundColor={Theme.Colors.PlaceboBlue}
              icon={<ExportIcon />}
              outsideLabel
              fontSize={13}
              fontWeight="Semibold"
              outsideWidth={70}
              colorless
              marginBottom={16}
            />
            )}
          </Container>
        </ScrollView>
      </SafeArea>
    </Modal>
  );
};

export { QRModal };
