import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParams } from 'utils';
import ProfileController from 'screens/app/profile/Profile/ProfileController';
import ProfileEditController from 'screens/app/profile/ProfileEdit/ProfileEditController';
import ConfirmationCodeController from 'screens/app/profile/ConfirmationCode/ConfirmationCodeController';

const Stack = createNativeStackNavigator<ProfileStackParams>();

const ProfileStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Profile">
    <Stack.Screen name="Profile" component={ProfileController} />
    <Stack.Screen name="ProfileEdit" component={ProfileEditController} />
    <Stack.Screen name="ConfirmationCode" component={ConfirmationCodeController} />
  </Stack.Navigator>
);

export default ProfileStack;
