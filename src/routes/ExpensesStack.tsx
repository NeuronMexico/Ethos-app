import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExpensesStackParams } from 'utils';
import ExpensesController from 'screens/app/expenses/Expenses/ExpensesController';
import ExpenseSummaryController from 'screens/app/expenses/ExpenseSummary/ExpenseSummaryController';

const Stack = createNativeStackNavigator<ExpensesStackParams>();

const ExpensesStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Expenses">
    <Stack.Screen name="Expenses" component={ExpensesController} />
    <Stack.Screen name="ExpensesSummary" component={ExpenseSummaryController} />
  </Stack.Navigator>
);

export default ExpensesStack;
