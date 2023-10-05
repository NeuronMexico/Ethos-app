import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParams } from 'utils';
import TabNavigator from './TabNavigator';
import CardsGlobalStack from './CardsGlobalStack';
import HomeGlobalStack from './HomeGlobalStack';

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TabNavigator">
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="CardsGlobalStack" component={CardsGlobalStack} />
    <Stack.Screen name="HomeGlobalStack" component={HomeGlobalStack} />
  </Stack.Navigator>
);

export default AppStack;
