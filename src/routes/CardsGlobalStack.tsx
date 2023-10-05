import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardsGlobalStackParams } from 'utils';
import CardController from 'screens/app/cards/Card/CardController';
import CardSelectionController from 'screens/app/cards/CardSelection/CardSelectionController';
import CardShippingController from 'screens/app/cards/CardShipping/CardShippingController';
import CardActivationController from 'screens/app/cards/CardActivation/CardActivationController';
import ChangePinController from 'screens/app/cards/ChangePin/ChangePinController';
import CreditDetailController from 'screens/app/cards/CreditDetail/CreditDetailController';

const Stack = createNativeStackNavigator<CardsGlobalStackParams>();

const CardsGlobalStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Card">
    <Stack.Screen name="Card" component={CardController} />
    <Stack.Screen name="CardSelection" component={CardSelectionController} />
    <Stack.Screen name="CardShipping" component={CardShippingController} />
    <Stack.Screen name="CardActivation" component={CardActivationController} />
    <Stack.Screen name="ChangePin" component={ChangePinController} />
    <Stack.Screen name="CreditDetail" component={CreditDetailController} />
  </Stack.Navigator>
);

export default CardsGlobalStack;
