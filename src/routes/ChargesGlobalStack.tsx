import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChargesGlobalStackParams } from 'utils';
import ChargesContactsController from 'screens/app/transactions/ChargesContacts/ChargesContactsController';
import ChargesCashController from 'screens/app/transactions/ChargesCash/ChargesCashController';
import ChargesScheduledController from 'screens/app/transactions/ChargesScheduled/ChargesScheduledController';

const Stack = createNativeStackNavigator<ChargesGlobalStackParams>();

const ChargesGlobalStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ChargesScheduled" component={ChargesScheduledController} />
    <Stack.Screen name="ChargesCash" component={ChargesCashController} />
    <Stack.Screen name="ChargesContacts" component={ChargesContactsController} />
  </Stack.Navigator>
);

export default ChargesGlobalStack;
