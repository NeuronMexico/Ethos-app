import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardsGlobalStackParams } from 'utils';
import CardController from 'screens/app/Cards/Card/CardController';
import CardSelectionController from 'screens/app/Cards/CardSelection/CardSelectionController';
import CardShippingController from 'screens/app/Cards/CardShipping/CardShippingController';
import CardActivationController from 'screens/app/Cards/CardActivation/CardActivationController';
import ChangePinController from 'screens/app/Cards/ChangePin/ChangePinController';
import CreditDetailController from 'screens/app/Cards/CreditDetail/CreditDetailController';
import CardReportController from 'screens/app/Cards/CardReport/CardReportController';
import CashPaymentController from 'screens/app/Cards/CashPayment/CashPaymentController';
import EstablishmentsController from 'screens/app/Cards/Establishments/EstablishmentsController';
import DomiciliaryPaymentController from 'screens/app/Cards/DomiciliaryPayment/DomiciliaryPaymentController';
import AccountStatementController from 'screens/app/Cards/AccountStatement/AccountStatementController';
import PDFViewerController from 'screens/app/Cards/PDFViewer/PDFViewerController';

const Stack = createNativeStackNavigator<CardsGlobalStackParams>();

const CardsGlobalStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Card">
    <Stack.Screen name="Card" component={CardController} />
    <Stack.Screen name="CardSelection" component={CardSelectionController} />
    <Stack.Screen name="CardShipping" component={CardShippingController} />
    <Stack.Screen name="CardActivation" component={CardActivationController} />
    <Stack.Screen name="ChangePin" component={ChangePinController} />
    <Stack.Screen name="CreditDetail" component={CreditDetailController} />
    <Stack.Screen name="CardReport" component={CardReportController} />
    <Stack.Screen name="CashPayment" component={CashPaymentController} />
    <Stack.Screen name="Establishments" component={EstablishmentsController} />
    <Stack.Screen name="DomiciliaryPayment" component={DomiciliaryPaymentController} />
    <Stack.Screen name="AccountStatement" component={AccountStatementController} />
    <Stack.Screen name="PDFViewer" component={PDFViewerController} />
  </Stack.Navigator>
);

export default CardsGlobalStack;
