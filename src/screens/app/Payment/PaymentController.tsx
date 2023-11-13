import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { useTranslation } from 'react-i18next';
import { Container, SafeArea, Text } from 'components';
import { AppStackParams, formatQuantity } from 'utils';
import { usePaymentFlow } from 'hooks';
import CashPaymentScreen from './PaymentScreen';
import { QRModal } from './components';

interface Props extends NativeStackScreenProps<AppStackParams, 'PaymentFlow'> {}

const PaymentController: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const {
    flow,
    title,
    buttonLabel,
    showQRModal,
    setShowQRModal,
    QRModalTitle,
    QRModalMsg,
    QRModalAmount,
    QRTransactionCost,
    onConfirm,
  } = usePaymentFlow(route.params.flow);

  const onPressConfirm = useCallback(() => {
    onConfirm(
      <>
        <Text text={formatQuantity(2500)} fontSize={34} fontWeight="Bold" textAlign="center" marginBottom={16} />
        <Container row width="100%">
          <Container flex crossAlignment="end" style={{ marginRight: 12 }}>
            <Text text={t('transactions:myCreditCard')} typography="caption" fontWeight="Regular" />
            <Text text="***334" typography="header" fontWeight="Bold" marginTop={8} />
          </Container>
          <Container flex style={{ marginLeft: 12 }}>
            <Text text={t('cards:destinationAccount')} typography="caption" fontWeight="Regular" />
            <Text text="CLABE ***531" typography="header" fontWeight="Bold" marginTop={8} />
            <Text text={t('form:bank')} typography="caption" fontWeight="Regular" marginTop={8} />
            <Text text="STP" typography="header" fontWeight="Bold" marginTop={8} />
            <Text text={t('transactions:name')} typography="caption" fontWeight="Regular" marginTop={8} />
            <Text text="Ayush Lagun" typography="header" fontWeight="Bold" marginTop={8} />
            <Text text={t('form:concept')} typography="caption" fontWeight="Regular" marginTop={8} />
            <Text text="Pago cena" typography="header" fontWeight="Bold" marginTop={8} />
          </Container>
        </Container>
      </>,
    );
  }, [onConfirm, t]);

  return (
    <SafeArea>
      <CashPaymentScreen
        flow={flow}
        title={title('Ayush Lagun')}
        buttonLabel={buttonLabel}
        onPressConfirm={onPressConfirm}
      />
      <QRModal
        visible={showQRModal}
        title={QRModalTitle}
        message={QRModalMsg}
        amount={QRModalAmount(2500)}
        transactionCost={QRTransactionCost}
        flow={flow}
        onPressCheckEstablishment={() => {
          setShowQRModal(false);
          navigation.navigate('Establishments');
        }}
        onPressBack={() => setShowQRModal(false)}
      />
    </SafeArea>
  );
};

export default PaymentController;
