import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginController from 'screens/auth/Login/LoginController';
import { AuthStackParams } from 'utils';
import CreateAccountController from 'screens/auth/CreateAccount/CreateAccountController';
import UserValidationController from 'screens/auth/UserValidation/UserValidationController';
import PersonalInformationController from 'screens/auth/PersonalInformation/PersonalInformationController';
import ApplicationValidationController from 'screens/auth/ApplicationValidation/ApplicationValidationController';
import ValidatedInformationController from 'screens/auth/ValidatedInformation/ValidatedInformationController';
import ContractDetailsController from 'screens/auth/ContractDetails/ContractDetailsController';
import { InitialOnboardingPresentation } from 'components';
import EditProfileFieldController from 'screens/app/profile/EditProfileField/EditProfileFieldController';

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="FirstSteps">
    <Stack.Screen name="FirstSteps" component={InitialOnboardingPresentation} />
    <Stack.Screen name="Login" component={LoginController} />
    <Stack.Screen name="CreateAccount" component={CreateAccountController} />
    <Stack.Screen name="UserValidation" component={UserValidationController} />
    <Stack.Screen name="PersonalInformation" component={PersonalInformationController} />
    <Stack.Screen name="ApplicationValidation" component={ApplicationValidationController} />
    <Stack.Screen name="ValidatedInformation" component={ValidatedInformationController} />
    <Stack.Screen name="ContractDetails" component={ContractDetailsController} />
    <Stack.Screen name="CreateAlias" component={EditProfileFieldController} />
  </Stack.Navigator>
);

export default AuthStack;
