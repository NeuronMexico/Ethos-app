import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExportIcon } from 'assets/svg';

import {
  Button,
  Container, Header, OptionButton, QRCode, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import { PaymentGlobalStackParams, formatQuantity } from 'utils';

const PaymentQR = () => {
  const { t } = useTranslation();
  const { params: { title, variant } } = useRoute<RouteProp<PaymentGlobalStackParams, 'qr'>>();
  const { goBack } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeArea>
      <Container flex>
        <Header title={title} showBackButton={variant === 'qr'} />
        <Container flex center middle style={{ marginTop: 32, paddingHorizontal: Theme.Sizes.Padding }}>
          {
            variant !== 'withdrawal' && (
              <Text marginBottom={16}>
                <Text text={t('form:reference')} />
                <Text text="1909230" fontWeight="Bold" />
              </Text>
            )
          }
          <Text marginBottom={16}>
            <Text text={t('alert:invoice')} />
            <Text text="4235" fontWeight="Bold" />
          </Text>
          <Text marginBottom={16}>
            <Text text={new Date().toISOString()} />
          </Text>
          <Text marginBottom={16}>
            <Text text={t('qr:codeValidFor')} />
            <Text text="24 horas" fontWeight="Bold" />
          </Text>
          <Container style={{ marginVertical: 16 }}>
            <QRCode
              value="erwerw"
            />
          </Container>
          {
            variant === 'withdrawal' ? (
              <>
                <Text text={t('qr:withdrawalMessage')} fontSize={17} textAlign="center" />
                <Text text="328572" fontSize={34} fontWeight="Bold" marginTop={16} />
                <Text text="$ 2,500.00 MXN" fontWeight="Bold" marginVertical={16} />
                <Text text={t('qr:costOfTransaction', { amount: formatQuantity(75) })} fontSize={13} />
                <Text text={t('qr:enjoyYourMoney')} fontSize={17} marginVertical={16} textAlign="center" />
              </>
            ) : (
              <>
                <Text text={t('qr:shareCode')} />
                <Text text={formatQuantity(2500)} fontSize={34} fontWeight="Bold" marginVertical={16} />
                <Text text={t('form:accountWhereChargesWillBeMade')} />
                <Text text="***334" fontWeight="Bold" fontSize={17} />
                <Text text={t('form:concept')} marginVertical={8} />
                <Text text="Pago de Viaje" fontWeight="Bold" fontSize={17} marginBottom={16} />
              </>
            )
          }
          <Container flex style={{ width: '100%', paddingHorizontal: 16 }}>
            {
           (variant === 'cash' || variant === 'withdrawal') && (
           <Button
             label={t('global:goBack')}
             backgroundColor={Theme.Colors.WhiteSmoke}
             colorless
             onPress={goBack}
             marginBottom={16}
           />
           )
            }
            <OptionButton
              onPress={() => {}}
              width={55}
              height={55}
              borderRadius={15}
              backgroundColor={Theme.Colors.PlaceboBlue}
              marginHorizontal={5}
              label={t('global:share')}
              icon={<ExportIcon width={30} />}
            />
          </Container>
        </Container>
      </Container>
    </SafeArea>
  );
};

export default PaymentQR;
