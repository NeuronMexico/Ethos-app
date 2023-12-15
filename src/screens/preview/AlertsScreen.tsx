import React, { useRef } from 'react';
import {
  Animated, Button, ScrollView,
} from 'react-native';
import {
  Container, Header, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import { useAlert } from 'context';
import { useTranslation } from 'react-i18next';
import { ContentModalResponse } from 'screens/app/Payment/components';

const AlertsScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;
  const { t } = useTranslation();
  const alert = useAlert();

  const showAlert = (config) => {
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
      ...config, // Configuración específica de cada tipo de alerta
    });
  };

  const showSuccessAlert = () => {
    showAlert({
      title: 'Éxito',
      actions: [{ label: 'OK', onPress: alert.hide, type: 'primary' }],
    });
  };

  const showErrorAlert = () => {
    showAlert({
      title: 'Error',
      actions: [{ label: 'OK', onPress: alert.hide, type: 'destructive-primary' }],
    });
  };

  const showConfirmationAlert = () => {
    showAlert({
      title: 'Confirmación',
      actions: [
        { label: 'Sí', onPress: alert.hide, type: 'primary' },
        { label: 'No', onPress: alert.hide, type: 'destructive-secondary' },
      ],
    });
  };

  const showDeleteAlert = () => {
    showAlert({
      title: 'Eliminar',
      actions: [
        { label: 'Eliminar', onPress: alert.hide, type: 'destructive-primary' },
        { label: 'Cancelar', onPress: alert.hide, type: 'destructive-secondary' },
      ],
    });
  };

  const showRejectAlert = () => {
    showAlert({
      title: 'Rechazar',
      actions: [
        { label: 'Rechazar', onPress: alert.hide, type: 'destructive-primary' },
        { label: 'Cancelar', onPress: alert.hide, type: 'destructive-secondary' },
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
          <Button title="Rechazar" onPress={showRejectAlert} />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default AlertsScreen;
