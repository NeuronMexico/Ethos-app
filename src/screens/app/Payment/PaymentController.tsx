import React, { useCallback, useMemo } from 'react';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import {
  Container, QRModal, SafeArea, Text,
} from 'components';
import { AppStackParams, formatQuantity } from 'utils';
import { usePaymentFlow } from 'hooks';
import { useAlert } from 'context';
import CashPaymentScreen from './PaymentScreen';

interface Props extends NativeStackScreenProps<AppStackParams, 'PaymentFlow'> {}

const PaymentController: React.FC<Props> = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const { params } = useRoute<RouteProp<AppStackParams, 'PaymentFlow'>>();

  const { t } = useTranslation();

  const alert = useAlert();

  const alertInfo = useMemo(() => (
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
    </>
  ), [t]);

  const onFinishTransaction = useCallback((success: boolean) => {
    alert.show({
      authorization: '437437',
      trackingKey: '837493748374938473',
      reference: '534332',
      invoice: '12345',
      date: new Date(),
      title: 'Pago exitoso',
      checkmark: success,
      rejectMarck: !success,
      extraInfo: alertInfo,
      shareOption: true,
      fullscreen: true,
      actions: [{
        label: t('global:goBack'),
        type: 'secondary',
        onPress: () => {
          alert.hide();
          navigate('TransactionsStack');
        },
      }],
    });
  }, [alert, alertInfo, navigate, t]);

  const {
    flow,
    title,
    buttonLabel,
    showQRModal,
    setShowQRModal,
    QRModalTitle,
    QRModalMsg,
    QRModalAmount,
    onConfirm,
  } = usePaymentFlow(params.flow, onFinishTransaction);

  return (
    <SafeArea>
      <CashPaymentScreen
        flow={flow}
        title={title('Ayush Lagun')}
        buttonLabel={buttonLabel}
        onPressConfirm={() => onConfirm(alertInfo)}
      />
      <QRModal
        visible={showQRModal}
        title={QRModalTitle}
        message={QRModalMsg}
        amount={QRModalAmount(2500)}
        flow={flow}
        onPressCheckEstablishment={() => {
          setShowQRModal(false);
          navigate('Establishments');
        }}
        onPressBack={() => setShowQRModal(false)}
      />
    </SafeArea>
  );
};

export default PaymentController;
