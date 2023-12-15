import React, { useRef, useState } from 'react';
import {
  Animated, Button, ScrollView,
} from 'react-native';
import {
  Container, Header, QRModal, SafeArea,
} from 'components';
import Theme from 'theme';
import { useAlert } from 'context';
import { useTranslation } from 'react-i18next';
import { ContentModalResponse } from 'screens/app/Payment/components';
import { formatQuantity } from 'utils';

const AlertsScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;
  const { t } = useTranslation();
  const alert = useAlert();
  const [showQRModal, setShowQRModal] = useState<boolean>(false);

  const showAlert = () => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={Number('1234')}
          date={new Date()}
          references={[
            { label: 'form:costPerDisposal', value: '$50' },
            { label: 'form:SPEICost', value: '$7.50' },
            { label: 'form:reference', value: 'ABC123' },
          ]}
          paymentDetails={[
            { label: 'form:name', value: 'Andrés Lara' },
            { label: 'form:destinationAccount', value: 'CLABE ***531' },
            { label: 'form:concept', value: 'Pago Viaje' },
            { label: 'form:bank', value: 'STP' },
          ]}
        />
      ),
      title: t('charges:confirmCharge'),
      fullscreen: false,
      checkmark: true,
      logo: true,
      reference: '123',
      invoice: '1234',
      actions: [
        { label: 'Primary', onPress: alert.hide, type: 'primary' },
        { label: 'Secondary', onPress: alert.hide, type: 'secondary' },
        { label: 'Destructive Primary', onPress: alert.hide, type: 'destructive-primary' },
        { label: 'Destructive Secondary', onPress: alert.hide, type: 'destructive-secondary' },
      ],
    });
  };

  const showSuccessAlert = () => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={Number('1234')}
          paymentDetails={[
            { label: 'form:name', value: 'Andrés Lara' },
            { label: 'form:destinationAccount', value: 'CLABE ***531' },
            { label: 'form:concept', value: 'Pago Viaje' },
            { label: 'form:bank', value: 'STP' },
          ]}
          cardButton
        />
      ),
      title: t('form:successfulPayment'),
      fullscreen: false,
      checkmark: true,
      logo: true,
      reference: '123',
      invoice: '1234',
      date: new Date(),
      actions: [
        { label: t('form:goToTransactions'), onPress: alert.hide, type: 'secondary' },
        { label: t('global:share'), onPress: alert.hide, type: 'primary' },
      ],
    });
  };

  const showErrorAlert = () => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={Number('1234')}
          paymentDetails={[
            { label: 'form:name', value: 'Andrés Lara' },
            { label: 'form:destinationAccount', value: 'CLABE ***531' },
          ]}
        />
      ),
      title: t('form:rejectedPayment'),
      fullscreen: false,
      rejectMarck: true,
      logo: true,
      date: new Date(),
      actions: [
        { label: t('form:goToTransactions'), onPress: alert.hide, type: 'secondary' },
        { label: t('global:share'), onPress: alert.hide, type: 'primary' },
      ],
    });
  };

  const showConfirmationAlert = () => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={Number('1234')}
          paymentDetails={[
            { label: 'form:name', value: 'Andrés Lara' },
            { label: 'form:destinationAccount', value: 'CLABE ***531' },
            { label: 'form:concept', value: 'Pago Viaje' },
            { label: 'form:bank', value: 'STP' },
          ]}
          references={[
            { label: 'form:costPerDisposal', value: '$50' },
            { label: 'form:SPEICost', value: '$7.50' },
            { label: 'form:montly', value: '534332' },
          ]}
          label={t('form:cardLabel')}
          cardButton
        />
      ),
      title: t('form:confirmWithoutCard'),
      fullscreen: false,
      logo: true,
      actions: [
        { label: t('global:confirm'), onPress: alert.hide, type: 'primary' },
        { label: t('global:cancel'), onPress: alert.hide, type: 'secondary' },
      ],
    });
  };

  const showDeleteAlert = () => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={Number('1234')}
          cardButton
        />
      ),
      title: t('form:deleteQREthoscrédito'),
      fullscreen: false,
      logo: true,
      actions: [
        { label: t('global:confirm'), onPress: alert.hide, type: 'primary' },
        { label: t('global:cancel'), onPress: alert.hide, type: 'secondary' },
      ],
    });
  };

  const paymentRequest = () => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={2500}
          pickerCard
          references={[
            { label: 'Disposición de línea de crédito', value: '$50' },
            { label: 'Costo por Transferencia', value: '$7.50' },
          ]}
        />
      ),
      title: 'Catherine Daran te envió una solicitud de cobro',
      actions: [
        { label: 'Pagar', onPress: alert.hide, type: 'primary' },
        { label: 'Pendiente', onPress: alert.hide, type: 'secondary' },
        { label: t('global:decline'), onPress: alert.hide, type: 'destructive-secondary' },
      ],
    });
  };

  return (
    <SafeArea>
      <Header title="Alerts" />
      <ScrollView
        contentContainerStyle={{ paddingTop: 16, paddingHorizontal: Theme.Sizes.Padding }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        <Container>
          <Button title="Éxito" onPress={showSuccessAlert} />
          <Button title="Error" onPress={showErrorAlert} />
          <Button title="Confirmación" onPress={showConfirmationAlert} />
          <Button title="Eliminar" onPress={showDeleteAlert} />
          <Button title="Solicitud de pago " onPress={paymentRequest} />
          <Button title="Alerta de QR" onPress={() => setShowQRModal(true)} />
          <Button title="Variantes de componentes en alertas" onPress={showAlert} />
          <QRModal
            visible={showQRModal}
            title={t('transactions:code')}
            message={t('cards:visitAnAffiliatedEstablishment')}
            amount={`${formatQuantity(2500)} MXN`}
            flow="code-payment"
            onPressCheckEstablishment={() => {
              setShowQRModal(false);
            }}
            onPressBack={() => setShowQRModal(false)}
          />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default AlertsScreen;
