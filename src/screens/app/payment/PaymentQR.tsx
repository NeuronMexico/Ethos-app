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
  const { params: { title, showHeader } } = useRoute<RouteProp<PaymentGlobalStackParams, 'qr'>>();
  const { goBack } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeArea>
      <Container flex>
        { showHeader && (<Header title={title} />) }
        <Container flex center middle style={{ marginTop: 32 }}>
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
          <Text text={t('qr:shareCode')} />
          <Text text={formatQuantity(2500)} fontSize={34} fontWeight="Bold" marginVertical={16} />
          <Text text={t('form:accountWhereChargesWillBeMade')} />
          <Text text="***334" fontWeight="Bold" fontSize={17} />
          <Container flex style={{ width: '100%', paddingHorizontal: 16 }}>
            { showHeader && (
              <Button
                label={t('global:goBack')}
                backgroundColor={Theme.Colors.WhiteSmoke}
                colorless
                onPress={goBack}
                marginBottom={16}
              />
            ) }
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
