import { SafeArea } from 'components';
import React from 'react';
import NotificationSettingsScreen from './NotificationSettingsScreen';

const NotificationSettingsController: React.FC = () => {
    return(
    <SafeArea>
        <NotificationSettingsScreen />
    </SafeArea>
    )
};

export default NotificationSettingsController;
