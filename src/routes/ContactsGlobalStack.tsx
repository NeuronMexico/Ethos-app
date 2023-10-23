import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactsStackParams } from 'utils';
import ListController from 'screens/app/contacts/List/ListController';
import FormController from 'screens/app/contacts/Form/FormController';
import NewAccountController from 'screens/app/contacts/NewAccount/NewAccountController';

const Stack = createNativeStackNavigator<ContactsStackParams>();

const ContactsGlobalStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="List">
    <Stack.Screen name="List" component={ListController} />
    <Stack.Screen name="Form" component={FormController} />
    <Stack.Screen name="NewAccount" component={NewAccountController} />
  </Stack.Navigator>
);

export default ContactsGlobalStack;
