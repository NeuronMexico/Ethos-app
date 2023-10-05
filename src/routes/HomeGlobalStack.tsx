import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeGlobalStackParams } from 'utils';
import ShortcutsController from 'screens/app/Shortcuts/ShortcutsController';

const Stack = createNativeStackNavigator<HomeGlobalStackParams>();

const HomeGlobalStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Shortcuts" component={ShortcutsController} />
  </Stack.Navigator>
);

export default HomeGlobalStack;
