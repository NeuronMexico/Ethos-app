import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginController from 'screens/auth/Login/LoginController';
import { AuthStackParams } from 'utils';

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginController} />
  </Stack.Navigator>
);

export default AuthStack;
