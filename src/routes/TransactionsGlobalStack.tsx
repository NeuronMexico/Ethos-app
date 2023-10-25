import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransactionsGlobalStackParams } from 'utils';
import ScheduledPaymentsController from 'screens/app/transactions/ScheduledPayments/ScheduledPaymentsController';
import ScheduledPaymentController from 'screens/app/transactions/ScheduledPayment/ScheduledPaymentController';
import BillPaymentController from 'screens/app/transactions/BillPayment/BillPaymentController';

const Stack = createNativeStackNavigator<TransactionsGlobalStackParams>();

const TransactionsGlobalStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ScheduledPayments" component={ScheduledPaymentsController} />
    <Stack.Screen name="ScheduledPayment" component={ScheduledPaymentController} />
    <Stack.Screen name="BillPayment" component={BillPaymentController} />
  </Stack.Navigator>
);

export default TransactionsGlobalStack;
