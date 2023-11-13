import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentGlobalStackParams } from 'utils';
import PaymentForm from 'screens/app/payment/PaymentForm';
import PaymentQR from 'screens/app/payment/PaymentQR';

const Stack = createNativeStackNavigator<PaymentGlobalStackParams>();

const PaymentGlobalStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="form" component={PaymentForm} />
    <Stack.Screen name="qr" component={PaymentQR} />
  </Stack.Navigator>
);

export default PaymentGlobalStack;
