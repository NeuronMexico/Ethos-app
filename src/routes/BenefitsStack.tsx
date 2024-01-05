import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BenefitsStackParams } from 'utils';
import BenefitsController from 'screens/app/benefits/Benefits/BenefitsController';
import HireBenefitFlowController from 'screens/app/benefits/HireBenefitFlow/HireBenefitFlowController';

const Stack = createNativeStackNavigator<BenefitsStackParams>();

const BenefitsStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Benefits">
    <Stack.Screen name="Benefits" component={BenefitsController} />
    <Stack.Screen name="HireBenefit" component={HireBenefitFlowController} />
  </Stack.Navigator>
);

export default BenefitsStack;
