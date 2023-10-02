import React from 'react';

import { SafeArea } from 'components/atoms/SafeArea';

import ProfileEditScreen from './ProfileEditScreen';

const ProfileEditController: React.FC = () => {
  const onSubmit = async () => {};

  return (
    <SafeArea>
      <ProfileEditScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default ProfileEditController;
