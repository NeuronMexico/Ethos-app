import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParams } from 'utils';
import VirtualAssistantController from 'screens/app/VirtualAssistant/VirtualAssistantController';
import PaymentController from 'screens/app/Payment/PaymentController';
import EstablishmentsController from 'screens/app/Establishments/EstablishmentsController';
import TabNavigator from './TabNavigator';
import CardsGlobalStack from './CardsGlobalStack';
import HomeGlobalStack from './HomeGlobalStack';
import ProfileStack from './ProfileStack';
import NotificationStack from './NotificationStack';
import ContactsGlobalStack from './ContactsGlobalStack';
import TransactionsGlobalStack from './TransactionsGlobalStack';

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TabNavigator">
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="CardsGlobalStack" component={CardsGlobalStack} />
    <Stack.Screen name="HomeGlobalStack" component={HomeGlobalStack} />
    <Stack.Screen name="ProfileStack" component={ProfileStack} />
    <Stack.Screen name="NotificationStack" component={NotificationStack} />
    <Stack.Screen name="ContactsGlobalStack" component={ContactsGlobalStack} />
    <Stack.Screen name="VirtualAssistant" component={VirtualAssistantController} />
    <Stack.Screen name="TransactionsGlobalStack" component={TransactionsGlobalStack} />
    <Stack.Screen name="PaymentFlow" component={PaymentController} />
    <Stack.Screen name="Establishments" component={EstablishmentsController} />
  </Stack.Navigator>
);

export default AppStack;
