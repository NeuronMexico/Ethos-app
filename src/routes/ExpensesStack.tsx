import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExpensesStackParams } from 'utils';
import ExpensesController from 'screens/app/expenses/Expenses/ExpensesController';
import ExpenseSummaryController from 'screens/app/expenses/ExpenseSummary/ExpenseSummaryController';
import AssignTagsController from 'screens/app/expenses/AssignTags/AssignTagsController';
import TicketsAndInvoicesController from 'screens/app/expenses/TicketsAndInvoices/TicketsAndInvoicesController';
import AddMovementController from 'screens/app/expenses/AddMovement/AddMovementController';

const Stack = createNativeStackNavigator<ExpensesStackParams>();

const ExpensesStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Expenses">
    <Stack.Screen name="Expenses" component={ExpensesController} />
    <Stack.Screen name="ExpensesSummary" component={ExpenseSummaryController} />
    <Stack.Screen name="AssignTags" component={AssignTagsController} />
    <Stack.Screen name="TicketsAndInvoices" component={TicketsAndInvoicesController} />
    <Stack.Screen name="AddMovement" component={AddMovementController} />
  </Stack.Navigator>
);

export default ExpensesStack;
