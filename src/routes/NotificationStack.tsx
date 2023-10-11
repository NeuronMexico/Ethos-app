import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotificationStackParams } from 'utils';
import NotificationsController from 'screens/app/notifications/Notifications/NotificationsController';
import NotificationSettingsController from 'screens/app/notifications/NotificationSettings/NotificationSettingsController';

const Stack = createNativeStackNavigator<NotificationStackParams>();

const NotificationStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Notifications">
    <Stack.Screen name="Notifications" component={NotificationsController} />
    <Stack.Screen name="NotificationSettings" component={NotificationSettingsController} />
  </Stack.Navigator>
);

export default NotificationStack;
