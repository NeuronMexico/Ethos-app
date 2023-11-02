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
import { formatDate, formatQuantity } from 'utils';

interface Props {
  visible: boolean;
  onPressCheckEstablishment: () => void;
  onPressBack: () => void;
}

const QRModal: React.FC<Props> = ({ visible, onPressCheckEstablishment, onPressBack }) => {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} animationType="slide">
      <SafeArea>
        <Header title={t('cards:cashPayment')} showBackButton={false} />

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
          <Text text={formatDate(new Date())} transform="capitalize" typography="subtitle" />
          <Text marginVertical={16}>
            <Text text={t('cards:codeValidFor')} typography="subtitle" fontWeight="Medium" />
            {' '}
            <Text text={t('cards:hours', { hours: 24 })} typography="subtitle" fontWeight="Bold" />
          </Text>

          <QRCode value="Ethos QR" />

          <Text
            text={t('cards:visitAnAffiliatedEstablishment')}
            typography="subtitle"
            marginVertical={16}
            textAlign="center"
          />
          <Text text="328572" fontSize={34} fontWeight="Bold" />
          <Text
            text={t('cards:depositAmount', { amount: formatQuantity(2500) })}
            typography="subtitle"
            fontWeight="Bold"
            marginVertical={16}
          />
          <Text>
            <Text text={t('cards:transactionCost')} typography="caption" fontWeight="Medium" />
            {' '}
            <Text text={formatQuantity(0)} typography="caption" fontWeight="Bold" />
          </Text>

          <Container flex alignment="end" width="100%">
            <Button label={t('cards:checkEstablishments')} onPress={onPressCheckEstablishment} marginTop={16} />
            <Button
              label={t('global:goBack')}
              onPress={onPressBack}
              marginVertical={16}
              backgroundColor={Theme.Colors.WhiteSmoke}
              textColor={Theme.Colors.DarkSoul}
            />
          </Container>
        </ScrollView>
      </SafeArea>
    </Modal>
  );
};

export { QRModal };
