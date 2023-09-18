import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParams } from 'utils';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TabNavigator">
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    {/* <Stack.Screen name="GlobalStack" component={GlobalStack} /> */}
  </Stack.Navigator>
);

export default AppStack;
