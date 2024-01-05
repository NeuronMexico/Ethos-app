import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BenefitsStackParams } from 'utils';
import BenefitsController from 'screens/app/benefits/Benefits/BenefitsController';
import HireBenefitFlowController from 'screens/app/benefits/HireBenefitFlow/HireBenefitFlowController';
import ReferController from 'screens/app/benefits/Refer/ReferController';
import RewardController from '../screens/app/benefits/Rewards/RewardController';

const Stack = createNativeStackNavigator<BenefitsStackParams>();

const BenefitsStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Benefits">
    <Stack.Screen name="Benefits" component={BenefitsController} />
    <Stack.Screen name="HireBenefit" component={HireBenefitFlowController} />
    <Stack.Screen name="Rewards" component={RewardController} />
    <Stack.Screen name="Refer" component={ReferController} />
  </Stack.Navigator>
);

export default BenefitsStack;
