import React from 'react';
import { SafeArea, SheetContentProfilePhoto } from 'components';
import { useBottomSheet } from 'context';
import PersonalProjectScreen from './PersonalProjectScreen';

const PersonalProjectController: React.FC = () => {
  const bottomSheet = useBottomSheet();

  const onSubmit = () => { };

  const onPressEditPhoto = () => {
    bottomSheet.show(<SheetContentProfilePhoto onPress={() => bottomSheet.hide()} />);
  };

  return (
    <SafeArea>
      <PersonalProjectScreen
        onSubmit={onSubmit}
        onPressEditPhoto={onPressEditPhoto}
      />
    </SafeArea>
  );
};

export default PersonalProjectController;
