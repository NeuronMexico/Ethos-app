import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransactionsGlobalStackParams } from 'utils';
import ScheduledPaymentsController from 'screens/app/transactions/ScheduledPayments/ScheduledPaymentsController';
import PaymentController from 'screens/app/transactions/Payment/PaymentController';
import BillPaymentController from 'screens/app/transactions/BillPayment/BillPaymentController';

const Stack = createNativeStackNavigator<TransactionsGlobalStackParams>();

const TransactionsGlobalStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ScheduledPayments" component={ScheduledPaymentsController} />
    <Stack.Screen name="Payment" component={PaymentController} />
    <Stack.Screen name="BillPayment" component={BillPaymentController} />
  </Stack.Navigator>
);

export default TransactionsGlobalStack;
