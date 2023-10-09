import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParams } from 'utils';
import TabNavigator from './TabNavigator';
import CardsGlobalStack from './CardsGlobalStack';
import HomeGlobalStack from './HomeGlobalStack';
import ProfileStack from './ProfileStack';

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TabNavigator">
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="CardsGlobalStack" component={CardsGlobalStack} />
    <Stack.Screen name="HomeGlobalStack" component={HomeGlobalStack} />
    <Stack.Screen name="ProfileStack" component={ProfileStack} />
  </Stack.Navigator>
);

export default AppStack;
