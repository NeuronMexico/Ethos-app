import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransactionsGlobalStackParams } from 'utils';
import ScheduledPaymentsController from 'screens/app/transactions/ScheduledPayments/ScheduledPaymentsController';
import EditPaymentController from 'screens/app/transactions/EditPayment/EditPaymentController';

const Stack = createNativeStackNavigator<TransactionsGlobalStackParams>();

const TransactionsGlobalStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ScheduledPayments" component={ScheduledPaymentsController} />
    <Stack.Screen name="EditPayment" component={EditPaymentController} />
  </Stack.Navigator>
);

export default TransactionsGlobalStack;
