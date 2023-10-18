import React from 'react';
import { SafeArea } from 'components/atoms/SafeArea';
import {
  SheetContentProfilePhoto,
} from 'components';
import { useBottomSheet } from 'context';
import ProfileEditScreen from './ProfileEditScreen';

const ProfileEditController: React.FC = () => {
  const bottomSheet = useBottomSheet();

  const onSubmit = async () => {};

  const onPressEditPhoto = () => {
    bottomSheet.show(<SheetContentProfilePhoto onPress={() => bottomSheet.hide()} />);
  };

  return (
    <SafeArea>
      <ProfileEditScreen onSubmit={onSubmit} onPressEditPhoto={onPressEditPhoto} />
    </SafeArea>
  );
};

export default ProfileEditController;
