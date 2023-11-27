import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginController from 'screens/auth/Login/LoginController';
import { AuthStackParams } from 'utils';
import CreateAccountController from 'screens/auth/CreateAccount/CreateAccountController';

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="CreateAccount">
    <Stack.Screen name="Login" component={LoginController} />
    <Stack.Screen name="CreateAccount" component={CreateAccountController} />
  </Stack.Navigator>
);

export default AuthStack;
